const mongoose = require('mongoose')

const lukusersSchema = new mongoose.Schema({

    LUKName:{
        type:String,
        required:true
    },

    LUKShop:{
        type:String,
        required:true
    },

    LUKAddresss:{
        type:String,
        required:true
    },

    LUKDescription:{
        type:String,
        required:true
    },

    LUKEmail:{
        type:String,
        required:true
    },

});

const lukusersModel = mongoose.model('lukusers',lukusersSchema)
module.exports = lukusersModel;

