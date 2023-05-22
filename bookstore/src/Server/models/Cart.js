const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    productid:{
      type:String,
      require:false
    },
    productname:{
      type:String,
      require:false
    },
    productprice:{
      type:String,
      require:false
    },
    productpicture:{
      type:String,
      require:false
    },
  },
  {
    collection:"cart_data"
  }
)

const cartModel = mongoose.model('cartData', cartSchema);
module.exports=cartModel;
