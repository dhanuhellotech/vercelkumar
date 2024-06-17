const cartSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    cartItems: [{
      product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
      quantity: { type: Number, required: true }
    }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });
  
  module.exports = mongoose.model('Cart', cartSchema);
  