const express = require("express");
const router = express.Router();


// const productsControllers = require("../../Controller/userController/productsController");

const productsControllers = require('../../Controller/adminController/productsController');

//services

router.post(
  "/api/products",
  productsControllers.uploadImage,
  productsControllers.resizeImage,
  productsControllers.addImageToCloud,
  productsControllers.addProduct
);
router.get("/api/products", productsControllers.getProducts);
// router.post('/',Services.uploadImage,Services.addservices)
router.delete("/api/products/:id", productsControllers.deleteProduct);
module.exports = router;
