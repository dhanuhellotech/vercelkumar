const jwt = require("jsonwebtoken");
const userModel = require("../Models/userModel/User");
const { secretKey } = require("../Config/Config");

const auth = async (req, res, next) => {
  const accessToken = req.cookies?.accessToken;

  if (!accessToken) {
    return res
      .status(401)
      .json({ valid: false, message: "No access token provided" });
  }

  jwt.verify(accessToken, secretKey, async (err, decoded) => {
    if (err) {
      console.error(err);
      return res
        .status(401)
        .json({ valid: false, message: "Invalid access token" });
    }

    try {
      const user = await userModel
        .findOne({ email: decoded.email })
        .select("-password"); //not get pass
      if (!user) {
        return res
          .status(401)
          .json({ valid: false, message: "User not found" });
      }
      req.user = user;
      next();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  });
};

module.exports = { auth };
