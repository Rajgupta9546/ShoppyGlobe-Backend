const express = require("express");
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

/*
POST /cart
Add product to cart
*/
router.post("/", authMiddleware, async (req, res) => {

  try {

    const { productId, quantity } = req.body;

    if (!productId || !quantity) {
      return res.status(400).json({ message: "Product ID and quantity are required" });
    }

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const cartItem = new Cart({
      productId,
      quantity,
      userId: req.user.id
    });

    await cartItem.save();

    res.status(201).json(cartItem);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

});


/*
PUT /cart/:id
Update quantity in cart
*/
router.put("/:id", authMiddleware, async (req, res) => {

  try {

    const { quantity } = req.body;

    if (!quantity) {
      return res.status(400).json({ message: "Quantity is required" });
    }

    const updated = await Cart.findByIdAndUpdate(
      req.params.id,
      { quantity },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    res.json(updated);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

});


/*
DELETE /cart/:id
Remove item from cart
*/
router.delete("/:id", authMiddleware, async (req, res) => {

  try {

    const deleted = await Cart.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    res.json({ message: "Item removed from cart" });

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

});

module.exports = router;