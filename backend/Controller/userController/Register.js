const jwt = require("jsonwebtoken");
const userModel = require("../../Models/userModel/User");
const bcrypt = require("bcrypt");

const userRegister = async (req, res) => {
  const { name, email, phone, gender, address, password, confirmPassword } =
    req.body;
  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }
    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }
    if (!phone) {
      return res.status(400).json({ message: "Phone is required" });
    }
    if (!gender) {
      return res.status(400).json({ message: "Gender is required" });
    }
    if (!address) {
      return res.status(400).json({ message: "All Fields is required" });
    }
    if (!password) {
      return res.status(400).json({ message: "Password is required" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const userData = new userModel({
      name,
      email,
      phone,
      gender,
      address,
      password: hashPassword,
    });
    const saveData = await userData.save();

    //token generate
    // const token = jwt.sign(
    //   { userId: saveData._id, email: saveData.email },
    //   "qwertyuio",
    //   { expiresIn: "1h" }
    // );

    res.status(201).json({
      message: "User Registered Successfully",
      data: saveData,
      //   token: token,
    });
  } catch (err) {
    res.status(400).json({ message: "Error Occurred", error: err });
  }
};

module.exports = { userRegister };
