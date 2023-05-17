import React, { useEffect, useState } from "react";
import "../css/Shop.css";
import Axios from "axios";

export default function Shop() {
  const [listOfItems, setListOfItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addToCart = (id,name,price,picture) => {
    alert(name+" added to cart!");
    Axios.post("http://localhost:3001/cart/addCart", {
      productid:id,
      productname:name,
      productprice:price,
      productpicture:picture
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/products/getProduct")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setListOfItems(response.data);
          console.log("Poops", response.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredItems = listOfItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="Shop">
        <div className="ShopWelcomeText">
          Save The Planet In Style
        </div>
        <div className="SearchBar">
          <input type="text" placeholder="Search products" onChange={handleSearch} />
        </div>
        <div className="ProductGrid">
          {filteredItems.map((item) => {
            return (
              <div className="ProductCard" key={item._id}>
                <img className="ProductImage" src={item.images} alt="Product" />
                <div className="ProductDetails">
                  <h3 className="ProductName">{item.name}</h3>
                  <p className="ProductDescription">{item.description}</p>
                  <p className="ProductCategory">{item.category}</p>
                  <p className="ProductPrice">$ {item.price}</p>
                </div>
                <button className="AddtoCart" onClick={() => addToCart(item._id,item.name,item.price,item.images)}>
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
