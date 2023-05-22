import React from "react";
import { Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import './App.css';
import Navbar from "./Client/components/navbar";
import Home from "./Client/components/Home";
import Shop from "./Client/components/Shop";
import AddProduct from "./Client/components/AddProduct";
import Login from "./Client/components/Login";
import Register from "./Client/components/Register";
import Profile from "./Client/components/Profile";
import ShoppingCart from "./Client/components/ShoppingCart";
import ManageProduct from "./Client/components/ManageProduct"
import LUKUsers from "./Client/components/LUKUsers";
import AddUser from "./Client/components/AddUser";


function App() {
  return (
    <div className="App">
      <header className="navcss">
        <Navbar />
       
      </header>
     
    
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/AddProduct" element={<AddProduct />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
        <Route path="/ManageProduct" element={<ManageProduct />} />
        <Route path="/LUKUsers" element={<LUKUsers/>} />
        <Route path="/AddUser" element={<AddUser/>} />
        
        
       
      </Routes>
    

     
      
     

      
      
    </div>
  );
}

export default App;
