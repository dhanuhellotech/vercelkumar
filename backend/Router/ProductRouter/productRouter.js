const express = require("express");
const router = express.Router();

const productsControllers = require("../../Controller/productController/offerPage");

// Create a new offer
router.post(
  "/api/offer",
  productsControllers.uploadImage,
  productsControllers.resizeImage,
  productsControllers.addOfferyImagetoCloud,
  productsControllers.addOffer
);

// Get all offers
router.get("/api/offer", productsControllers.getOffer);

// Update an existing offer
router.put(
  "/api/offer/:id",
  productsControllers.uploadImage,
  productsControllers.resizeImage,
  productsControllers.addOfferyImagetoCloud,
  productsControllers.updateOffer
);

// Delete an offer
router.delete("/api/offer/:id", productsControllers.deleteOffer);

module.exports = router;
