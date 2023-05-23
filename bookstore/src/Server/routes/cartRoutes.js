const express = require("express");
const router = express.Router();
const cartModel = require("../models/Cart");
const cors = require('cors');

// router.get("/getCart", async (req, res) => {
//   cartModel.find({}, (err, result) => {
//     if (err) {
//       res.json(err);
//     } else {
//       res.json(result);
//     }
//   });
// });

router.get('/getCart', async (req, res) => {
  try {
    const carts = await cartModel.find();
    res.json(carts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Add a product to the cart
router.post("/addCart", async (req, res) => {
  const cart = req.body;
  const newCart = new cartModel(cart);
  await newCart.save();
  res.json(cart);
});

// Delete a cart item
router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  await cartModel.findByIdAndRemove(id).exec();
  res.send("itemdeleted");
});

module.exports = router;
