const express = require('express');
const lukusersModel = require('./models/LUKUsers')
const mongoose = require('mongoose');
const cors = require('cors');
//const bodyParser = require('body-parser')


//app.use(bodyParser.json());
const app = express();


app.use(express.json());
app.use(cors());
app.use("/categories", require("./routes/categoryRoutes"))
app.use("/products", require("./routes/productRoutes"))
app.use('/luk',require('./routes/LUKUsersRoutes') );

mongoose.connect('mongodb+srv://ITPM:1234@cluster0.mpix3su.mongodb.net/');
app.listen(3001,()=> {console.log('server is meh');});

