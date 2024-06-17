const jwt = require("jsonwebtoken");
const userModel = require("../../Models/userModel/User");
const bcrypt = require("bcrypt");
const secretToken = require("../../Config/Config");

const LoginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ error: "Password incorrect" });
    }

    // Create JWT tokens
    const accessToken = jwt.sign({ email: user.email }, secretToken.secretKey, {
      expiresIn: "1h",
    });

    // Set tokens in cookies
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });

    return res.json({ success: true, token: accessToken });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { LoginController };
