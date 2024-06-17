const Cart = require('../../Models/adminModel/cartSchema');

const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.user._id;

    let cart = await Cart.findOne({ user: userId });

    if (cart) {
      const itemIndex = cart.items.findIndex(item => item.product == productId);
      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity;
      } else {
        cart.items.push({ product: productId, quantity });
      }
      cart.totalPrice += product.price * quantity;
      cart = await cart.save();
    } else {
      cart = new Cart({
        user: userId,
        items: [{ product: productId, quantity }],
        totalPrice: product.price * quantity
      });
      await cart.save();
    }

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const removeFromCart = async (req, res) => {
  try {
    const { productId } = req.body;
    const userId = req.user._id;

    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    const itemIndex = cart.items.findIndex(item => item.product == productId);
    if (itemIndex > -1) {
      cart.totalPrice -= cart.items[itemIndex].product.price * cart.items[itemIndex].quantity;
      cart.items.splice(itemIndex, 1);
      await cart.save();
    } else {
      return res.status(404).json({ message: 'Item not found in cart' });
    }

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addToCart, removeFromCart };
