const userModel = require("../../Models/userModel/User");
const nodemailer = require("nodemailer");
const Token = require("../../Models/userModel/Token");
const crypto = require("crypto");
const bcrypt = require("bcrypt");

// Send email function
const sendEmail = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "hrhellowtec@gmail.com",
        pass: "hgvg nmis mcnf egxq", // app password key
      },
    });

    await transporter.sendMail({
      from: "hrhellowtec@gmail.com",
      to: email,
      subject: subject,
      html: `<a href="${text}">Reset your password</a>`,
    });

    console.log("Email sent successfully");
  } catch (error) {
    console.log(error, "Email not sent");
  }
};

// Forgot password function
const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ error: "User with given email doesn't exist" });
    }

    let token = await Token.findOne({ userId: user._id });
    if (!token) {
      token = await new Token({
        userId: user._id,
        token: crypto.randomBytes(32).toString("hex"),
      }).save();
    }

    // domain name enter
    const link = `http://localhost:5173/api/password-reset/${user._id}/${token.token}`;

    await sendEmail(user.email, "Password Reset", link);

    res.status(200).send({
      message: "Password reset link sent to your email account",
      userId: user._id,
      Token: token.token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// re-password set or put function
const UpdateResetPassword = async (req, res) => {
  const { password, confirmPassword } = req.body;

  try {
    if (!password || !confirmPassword) {
      return res
        .status(400)
        .json({ error: "Both password fields are required" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    const user = await userModel.findById(req.params.userId);
    if (!user) return res.status(400).send("Invalid link or expired");

    const token = await Token.findOne({
      userId: user._id,
      token: req.params.token,
    });
    if (!token) return res.status(400).send("Invalid link or expired");

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    await token.deleteOne();

    res.json({ message: "Password reset successfully" });
  } catch (error) {
    console.error("Error in updateResetPassword:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  forgotPassword,
  UpdateResetPassword,
};
