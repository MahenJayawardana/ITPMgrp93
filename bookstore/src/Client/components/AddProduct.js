import React, { useState } from "react";
import axios from "axios";
import "../css/AddProduct.css";

export default function AddProduct() {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState("");

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleProductDescriptionChange = (e) => {
    setProductDescription(e.target.value);
  };

  const handleProductCategoryChange = (e) => {
    setProductCategory(e.target.value);
  };

  const handleProductPriceChange = (e) => {
    setProductPrice(e.target.value);
  };

  const handleProductImageChange = (e) => {
    setProductImage(e.target.value);
  };

  const handleAddProduct = () => {
    const newProduct = {
      name: productName,
      description: productDescription,
      category: productCategory,
      price: productPrice,
      images: productImage,
    };

    axios.post("http://localhost:3001/products/create", newProduct)
      .then((response) => {
        console.log(response.data);
        // Reset the form fields
        setProductName("");
        setProductDescription("");
        setProductCategory("");
        setProductPrice("");
        setProductImage("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="AddProductContainer">
    {
    <div>
      <h2>Add Product</h2>
      <form>
        <div>
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={handleProductNameChange}
          />
        </div>
        <div>
          <label htmlFor="productDescription">Product Description:</label>
          <textarea
            id="productDescription"
            value={productDescription}
            onChange={handleProductDescriptionChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="productCategory">Product Category:</label>
          <input
            type="text"
            id="productCategory"
            value={productCategory}
            onChange={handleProductCategoryChange}
          />
        </div>
        <div>
          <label htmlFor="productPrice">Product Price:</label>
          <input
            type="number"
            id="productPrice"
            value={productPrice}
            onChange={handleProductPriceChange}
          />
        </div>
        <div>
          <label htmlFor="productImage">Image URL:</label>
          <input
            type="text"
            id="productImage"
            value={productImage}
            onChange={handleProductImageChange}
          />
        </div>
        <button type="button" onClick={handleAddProduct}>
          Add Product
        </button>
      </form>
    </div>
    }
    </div>
  );
}
