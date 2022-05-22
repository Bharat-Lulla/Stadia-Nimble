import React from "react";
import styles from "../../styles/shop.module.scss";
import Header from "../Header";
import ShopItem from "./ShopItem";
export default function ShopPage() {
  const items = ["", "", "", ""];
  return (
    <div className={styles.shops}>
      <div className={styles.bg}>
        <img src="https://i.ibb.co/1zFGLBc/Wankhede-ICC-WCF.jpg" alt="" />
      </div>

      <Header />

      <div className={styles.main}>
        <p className={styles.heroheading}>Shop</p>
        <div className={styles.wrapper}>
          {items.map((item) => (
            <ShopItem />
          ))}
        </div>
      </div>
    </div>
  );
}
