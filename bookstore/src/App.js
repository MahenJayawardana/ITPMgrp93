import React from "react";
import { Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import './App.css';
import Navbar from "./Client/components/navbar";
import Home from "./Client/components/Home";
import Shop from "./Client/components/Shop";
import AddProduct from "./Client/components/AddProduct";


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
        
        
       
      </Routes>
    

     
      
     

      
      
    </div>
  );
}

export default App;
