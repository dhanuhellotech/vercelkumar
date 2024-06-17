const Product = require('../../models/adminModel/productModel');
const multer = require('../../Cloudniary/Upload');
const sharp = require("sharp");
const Cloudnary = require('../../Cloudniary/Cloud');

const uploadImage = multer.single('file');

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const resizeImage = async (req, res, next) => {
  try {
    const resizedImage = await sharp(req.file.buffer)
      .resize(500, 500)
      .toFormat("jpeg")
      .jpeg({ quality: 70 })
      .toBuffer()
    req.image = resizedImage.toString('base64');
    next();
  } catch (err) {
    console.log(err);
    return res.status(404).json({ message: "cannot get buffer image" });
  }
};

const addImageToCloud = async (req, res, next) => {
  try {
    const result = await Cloudnary.uploader.upload(`data:image/jpeg;base64,${req.image}`, {
      folder: "To Add Products"
    });
    req.result = result;
    next();
  } catch (err) {
    return res.status(404).json({ message: "cannot save image" });
  }
};

const addProduct = async (req, res) => {
  try {
    const { title, description, price, quantity, grams, category, isTopSelling, offerPrice, currentPrice } = req.body;
    
    const newProduct = new Product({
      image: req.result.secure_url,
      description,
      title,
      price,
      quantity,
      grams,
      category,
      isTopSelling,
      offerPrice,
      currentPrice
    });

    await newProduct.save();
    return res.status(200).json(newProduct);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getProducts,
  uploadImage,
  resizeImage,
  addImageToCloud,
  addProduct,
  deleteProduct
};
