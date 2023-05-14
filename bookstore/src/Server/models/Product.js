const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    description:{
        type: String,
    },
    category:{
        // type: mongoose.Schema.Types.ObjectId,
        type: String,
        // ref:"categories",
    },
    images:{
        type: String,
    },
    price:{
        // type:Number,
        type: String,
        default:0,
    },
});

const Product = mongoose.model('products', productSchema);
module.exports = Product;