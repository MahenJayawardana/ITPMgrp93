const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');


mongoose.connect('mongodb+srv://ITPM:1234@cluster0.mpix3su.mongodb.net/');

app.listen(3001,()=> {console.log('server is meh');});

// const express = require('express');

// require("dotenv").config();
// const bodyParser = require('body-parser');



// const app = express();

app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(
  session({
    secret: "maythesessionbewithyou",
    resave: false,
    saveUninitialized: false,
  })
);


// app.get("/", (req,res) => {
//   res.send("hello jwt");

// });

app.use('/users', require('./routes/userRoutes'));
// app.use("/categories", require("./routes/categoryRoutes"));
app.use("/products", require("./routes/productRoutes"));
// app.use("/cart", require("./routes/productRoutes"));
app.use("/cart", require("./routes/cartRoutes"));


module.exports = app;