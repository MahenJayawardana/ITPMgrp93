import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
// import Home from "./Client/components/Home"
import { BrowserRouter } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

//these are what I added from the YT video

// const express = require('express');
// const mongoose = require('mongoose');
// require("dotenv").config();
// const bodyParser = require('body-parser');

// const cors = require('cors');

// mongoose.connect('mongodb://localhost:27017/bookstore');

// const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(cors());

// app.get("/", (req,res) => {
//   res.send("hello jwt");

// });

// app.use("./categories", require("./routes/categoryRoutes"))
// app.use("./products", require("./routes/productRoutes"))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
