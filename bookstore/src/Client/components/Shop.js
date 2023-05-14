import React, { useEffect, useState } from "react";
// import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons"
// import { Row, Col, Card, Space, Typography } from "antd";
// import { useDispatch, useSelector } from 'react-redux';
// import useProducts from "../_actions/productActions";
import "../css/Shop.css";
import Axios from "axios";

export default function Shop() {
  const [listOfItems, setListOfItems] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/products/getProduct")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setListOfItems(response.data);

          console.log("Poops", response.data)

        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>

    
      <div className="Shop">
        <div className="ShopWelcomeText">
          Save The Planet In Style
        </div>
        <div className="ProductGrid">
          {listOfItems.map((item) => {
            return <div className="ProductCard" key={item._id}>
              <img className="ProductImage" src={item.images} alt="Product" />
                <div className="ProductDetails">
                <h3 className="ProductName">{item.name}</h3>
                <p className="ProductDescription">{item.description}</p>
                <p className="ProductCategory">{item.category}</p>
                <p className="ProductPrice">$ {item.price}</p>
                </div>
            </div>
          })}
        </div>
      </div>
    </>
  );
}

// const { Text } = Typography;

// function Shop() {
//   const dispatch = useDispatch();
//   const productList = useSelector((state) => state.product.productList)
//   const { getProductList } = useProducts();

//   useEffect(() => {
//     getProductList()
//   },);

//   const renderProductList = () => {
//     return (
//       <Row gutter={[12, 12]} style={{ padding: 10 }}>{productList?.map((item, index) =>
//         <Col key={index} xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
//           <Card
//             hoverable
//             cover={
//               <img
//                 alt="example"
//                 src={item.image}
//               />
//             }
//             actions={[
//               <EyeOutlined key="view" style={{ color: "green", fontSize: 20 }} />,
//               <ShoppingCartOutlined key="cart" style={{ color: "green", fontSize: 20 }} />,
//             ]}
//           >
//             <Space direction="vertical">
//               <Text strong>{item?.name}</Text>
//               <Text type="secondary">{item.category?.name}</Text>
//               <Text type="successs">{item?.price}</Text>
//             </Space>
//           </Card>
//         </Col>
//       )}
//       </Row>
//     );
//   };
//   return <div>{renderProductList()}</div>;
// }

// export default Shop;