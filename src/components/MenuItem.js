import React, { useState } from "react";
import styles from "../styles/menuItem.module.scss";
import MenuSubItem from "./MenuSubItem";
export default function MenuItem({ data, handleClick, handleRemove }) {
  return (
    <div className={styles.menu}>
      <p className={styles.menuHeading}>{data.name}</p>
      <div className={styles.wrapper}>
        {data.categories[0].category.items.map((menudata) => {
          return (
            <MenuSubItem
              key={menudata.item.id}
              menudata={menudata}
              styles={styles}
              handleClick={handleClick}
              handleRemove={handleRemove}
            />
          );
        })}
      </div>
    </div>
  );
}
