import React from "react";
import { Card } from "react-bootstrap";
import styles from "../pages/EventByBootstrap.module.css";

import product1 from "../assets/images/event/products/product1.png";
import product2 from "../assets/images/event/products/product2.png";

const product_List = [
  {
    img: product1,
    type: "셔츠/블라우스",
    productName: "데일리 베이직 셔츠 (7color)",
    percent: 50,
    price: 50000,
    filter: "남성의류",
  },
  {
    img: product2,
    type: "셔츠/블라우스",
    productName: "스탠다드 블루종 스웨이드 자켓",
    percent: 50,
    price: 100000,
    filter: "남성의류",
  },
  {
    img: product1,
    type: "셔츠/블라우스",
    productName: "데일리 베이직 셔츠 (7color)",
    percent: 50,
    price: 50000,
    filter: "남성의류",
  },
  {
    img: product2,
    type: "셔츠/블라우스",
    productName: "스탠다드 블루종 스웨이드 자켓",
    percent: 50,
    price: 100000,
    filter: "남성의류",
  },
  {
    img: product1,
    type: "셔츠/블라우스",
    productName: "데일리 베이직 셔츠(여성용) (7color)",
    percent: 50,
    price: 50000,
    filter: "여성의류",
  },
  {
    img: product2,
    type: "셔츠/블라우스",
    productName: "스탠다드 블루종 스웨이드 자켓(여성용)",
    percent: 50,
    price: 100000,
    filter: "여성의류",
  },
  {
    img: product1,
    type: "셔츠/블라우스",
    productName: "데일리 베이직 셔츠(여성용) (7color)",
    percent: 50,
    price: 50000,
    filter: "여성의류",
  },
  {
    img: product2,
    type: "셔츠/블라우스",
    productName: "스탠다드 블루종 스웨이드 자켓(여성용)",
    percent: 50,
    price: 100000,
    filter: "여성의류",
  },
  {
    img: product1,
    type: "가전제품",
    productName: "냉장고",
    percent: 50,
    price: 50000,
    filter: "가전제품",
  },
  {
    img: product2,
    type: "가전제품",
    productName: "전자레인지",
    percent: 50,
    price: 100000,
    filter: "가전제품",
  },
  {
    img: product1,
    type: "가전제품",
    productName: "냉장고",
    percent: 50,
    price: 50000,
    filter: "가전제품",
  },
  {
    img: product2,
    type: "가전제품",
    productName: "전자레인지",
    percent: 50,
    price: 100000,
    filter: "가전제품",
  },
];

const ProductList = ({ currentFilter }) => {
  const newProduct_list = product_List.filter(
    (e) => e.filter === currentFilter
  );
  return (
    <div className={styles.top__sales_list}>
      {newProduct_list.map((e, i) => (
        <Card style={{ minWidth: 240, borderRadius: 16 }}>
          <Card.Img src={e.img} className={styles.product__image} />
          <Card.Body style={{ padding: 0 }}>
            <div className={styles.product}>
              <div className={styles.content}>
                <div>
                  <p>{e.type}</p>
                  <h3>{e.productName}</h3>
                </div>
                <div className={styles.price__layout}>
                  <p className={styles.percent}>{e.percent}%</p>
                  <p className={styles.price}>{e.price.toLocaleString()}원</p>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;
