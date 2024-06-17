const express = require("express");
const router = express.Router();
const userController = require("../../Controller/userController/Register");
const LoginController = require("../../Controller/userController/userLogin");
const ForgotPasswordController = require("../../Controller/userController/forgotPassword");
const UserContacts = require("../../Controller/userController/userContactController");
const product = require("../../Middleware/authMiddleware");

router.post("/register", userController.userRegister);
router.post("/login", LoginController.LoginController);

//password reset router
router.post("/forgot-password", ForgotPasswordController.forgotPassword);
router.post("/:userId/:token", ForgotPasswordController.UpdateResetPassword);

//this router check for protected router
router.get("/user", product.auth, (req, res) => {
  res.status(200).json({ message: "Login Success" });
});

//user Contacts form router

router.post("/contact", product.auth, UserContacts.UserContact);
router.get("/contact", product.auth, UserContacts.GetUserContact);
// router.put("/contact/:id", product.auth, UserContacts.UpdateContact);
router.delete("/contact/:id", product.auth, UserContacts.DeleteContact);

module.exports = router;
