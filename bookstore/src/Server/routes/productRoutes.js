const router = require("express").Router();
const Product = require("../models/Product");
const Cart = require("../models/Cart");

// router.get('/', (req,res) => {
//     Product.find()
//     populate("category")
//     .exec()
//     .then((data, error) => {
//         if(error) return res.status(400).json({status: false, error});
//         return res.status(200).json({
//             status: true,
//             message: "Get Product successfully",
//             data,
//         });
//     });
// });


/**************************Shop Page*****************************/

// router.get("/getProduct", async (req, res) => {
//     Product.find({}, (err, result) => {
//         if (err) {
//             res.json(err);
//         } else {
//             res.json(result);
//         }
//     })
// });

router.get('/getProduct', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.post("/create", (req,res) => {
    const product = new Product(req.body)
    product.save((error, data) => {
        if (error) return res.status(400).json({ status: false, error});
        return res.status(200).json({
            status: true,
            message: "Product has been added successfully",
            data,
        });
    })
})

router.delete("/deleteProduct/:productId", (req, res) => {
  const { productId } = req.params;

  Product.findByIdAndRemove(productId, (err, deletedProduct) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error deleting product");
    } else {
      if (deletedProduct) {
        res.status(200).send("Product deleted successfully");
      } else {
        res.status(404).send("Product not found");
      }
    }
  });
});

router.put("/updateProduct/:productId", (req, res) => {
  const { productId } = req.params;
  const { name, description, category, price } = req.body;

  Product.findByIdAndUpdate(
    productId,
    { name, description, category, price },
    { new: true },
    (err, updatedProduct) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error updating the product");
      } else {
        res.status(200).json(updatedProduct);
      }
    }
  );
});

/**************************Cart Page*****************************/

// Add Cart Items
router.post("/addToCart", async (req, res) => {
  try {
    const productId = req.body.productId;

    // Retrieve the product details from the Products collection
    const product = await Product.findById(productId).lean();

    if (!product) {
      return res.status(404).json({ status: false, message: "Product not found" });
    }

    // Create a cart item with the product details
    const cartItem = {
      product: product._id,
      quantity: 1, // Set the default quantity to 1
      price: product.price, // Set the price from the product
      name: product.name, // Set the name from the product
      description: product.description, // Set the description from the product
      category: product.category, // Set the category from the product
      images: product.images, // Set the image from the product
    };

    // Add the cart item to the Cart collection
    const createdCartItem = await Cart.create(cartItem);

    return res.status(200).json({
      status: true,
      message: "Product has been added to the cart successfully",
      data: createdCartItem,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: false, error });
  }
});




// Get Cart Items
router.get("/getCart", async (req, res) => {
  try {
    // Retrieve the cart items from the Cart collection
    const cartItems = await Cart.find({}).lean();

    // Retrieve the product details for each cart item
    const populatedCartItems = await Promise.all(
      cartItems.map(async (cartItem) => {
        const product = await Product.findById(cartItem.product).lean();
        return {
          ...cartItem,
          product,
        };
      })
    );

    return res.status(200).json({
      status: true,
      message: "Cart items retrieved successfully",
      data: populatedCartItems,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: false, error });
  }
});


module.exports = router;