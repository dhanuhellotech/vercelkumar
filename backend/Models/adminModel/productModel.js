const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  image: String,
  description: String,
  title: String,
  price: Number,
  quantity: Number,
  grams: Number,
  isTopSelling: { type: Boolean, default: false },
  offerPrice: Number,
  currentPrice: Number,
  category: { type: String, enum: ['TBC', 'POWDER', 'RAW HERBS', 'DRIED FLOWERS'] },
  ratings: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
