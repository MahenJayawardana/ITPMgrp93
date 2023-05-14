const router = require("express").Router();
const Product = require("../models/Product");

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

router.get("/getProduct", async (req, res) => {
    Product.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
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

module.exports = router;