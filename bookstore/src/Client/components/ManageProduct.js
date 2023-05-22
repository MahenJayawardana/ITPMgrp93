import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/ManageProduct.css";
import Axios from "axios";

export default function ManageProduct() {
    const [listOfItems, setListOfItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [isBlurred, setIsBlurred] = useState(false); // Add this

    const deleteProduct = (productId) => {
        Axios.delete(`http://localhost:3001/products/deleteProduct/${productId}`)
            .then((response) => {
                console.log(response.data);
                // Refresh the product list after deletion
                fetchProductList();
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const openPopup = (item) => {
        setSelectedItem(item);
        setName(item.name);
        setDescription(item.description);
        setCategory(item.category);
        setPrice(item.price);
        setImageUrl(item.images);
        setShowPopup(true);
        setIsBlurred(true); // Add this
    };

    const closePopup = () => {
        setShowPopup(false);
        setIsBlurred(false); // Add this
    };

    const updateProduct = () => {
        Axios.put(`http://localhost:3001/products/updateProduct/${selectedItem._id}`, {
            name: name,
            description: description,
            category: category,
            images: imageUrl,
            price: price,
        })
            .then((response) => {
                console.log(response.data);
                // Refresh the product list after update
                fetchProductList();
                closePopup();
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const fetchProductList = () => {
        Axios.get("http://localhost:3001/products/getProduct")
            .then((response) => {
                if (Array.isArray(response.data)) {
                    setListOfItems(response.data);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        fetchProductList();
    }, []);

    return (
        <div className={`Shop ${isBlurred ? "Blur" : ""}`}> {/* Add the CSS class based on the isBlurred state */}
            <div className="ManageProductHeader">
                <Link to="/AddProduct" className="AddProductButton">
                    Add Product
                </Link>
            </div>

            <div className="ProductGrid">
                {listOfItems.map((item) => (
                    <div className="ProductCard" key={item._id}>
                        <img className="ProductImage" src={item.images} alt="Product" />
                        <div className="ProductDetails">
                            <h3 className="ProductName">{item.name}</h3>
                            <p className="ProductDescription">{item.description}</p>
                            <p className="ProductCategory">{item.category}</p>
                            <p className="ProductPrice">$ {item.price}</p>
                        </div>
                        <button className="UpdateButton" onClick={() => openPopup(item)}>
                            Update
                        </button>
                        <button className="DeleteButton" onClick={() => deleteProduct(item._id)}>
                            Delete
                        </button>
                    </div>
                ))}
            </div>

            {showPopup && (
                <div className="Popup">
                    <div className="PopupContent">
                        <h3>Update Product</h3>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
                        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
                        <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                        <button className="SaveButton" onClick={updateProduct}>
                            Save
                        </button>
                        <button className="CloseButton" onClick={closePopup}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

