import React, { useEffect, useState, useRef } from "react";
import Axios from "axios";

import "../css/ShoppingCart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const reportTemplate = useRef();

  const deleteItem = (id) => {
    Axios.delete(`http://localhost:3001/cart/delete/${id}`)
      .then((response) => {
        console.log(response.data);
        // Refresh the cart items after deletion
        fetchCartItems();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchCartItems = () => {
    Axios.get("http://localhost:3001/cart/getCart")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setCartItems(response.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  useEffect(() => {
    let calculatedTotal = 0;
    cartItems.forEach((cart) => {
      calculatedTotal += parseFloat(cart.productprice);
    });
    setTotal(calculatedTotal);
  }, [cartItems]);

  function handleDownload() {
    window.html2pdf(reportTemplate.current).save();
  }

  return (
    <div className="Cart">
      <div ref={reportTemplate}>
        <h2>Cart</h2>
        {cartItems.length > 0 ? (
          <div>
            {cartItems.map((cart) => (
              <div className="CartItem" key={cart.productid}>
                <img
                  className="CartItemImage"
                  src={cart.productpicture}
                  alt="Product"
                />
                <div className="CartItemDetails">
                  <h3 className="CartItemTitle">{cart.productname}</h3>
                  <p className="CartItemPrice">${cart.productprice}</p>
                  <button onClick={() => deleteItem(cart._id)}>delete</button>
                  <span></span>
                </div>
              </div>
            ))}
            <div className="CartTotal">
              <h3>Cart total: ${total}</h3>
              <p>shipping fee 2.12$ applicable</p>
              <h2>Total: ${total + 2.12}</h2>
            </div>
          </div>
        ) : (
          <p className="EmptyCart">Your cart is empty.</p>
        )}
      </div>
      <button onClick={handleDownload}>Download Receipt</button>
    </div>
  );
};

export default Cart;
