const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb+srv://ITPM:123@cluster0.mpix3su.mongodb.net/');

app.listen(3001,()=> {console.log('server is meh');});

// const express = require('express');

// require("dotenv").config();
// const bodyParser = require('body-parser');



// const app = express();

app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

// app.get("/", (req,res) => {
//   res.send("hello jwt");

// });

app.use("/categories", require("./routes/categoryRoutes"))
app.use("/products", require("./routes/productRoutes"))
