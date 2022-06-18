import React, { useState } from "react";

export default function MenuSubItem({
  styles,
  menudata,
  handleClick,
  handleRemove,
}) {
  const [count, setcount] = useState(0);

  return (
    <div className={styles.menuItem}>
      <img src={menudata.item.item_tag_image} alt="" />
      <div className={styles.maindiv}>
        <p className={styles.title}>{menudata.item.name}</p>
        <p>{menudata.item.desc}</p>
      </div>
      <div className={styles.priceandbtn}>
        <p className={styles.price}>₹{menudata.item.price}</p>
        {count === 0 ? (
          <div
            className={styles.btn}
            onClick={() => {
              setcount((prev) => prev + 1);
              handleClick({
                id: menudata.item.id,
                name: menudata.item.name,
                price: menudata.item.price,
              });
            }}
          >
            Add
          </div>
        ) : (
          <div className={styles.checkoutitem}>
            <div
              className={styles.left}
              onClick={() => {
                setcount((prev) => (prev === 0 ? 0 : prev - 1));
                handleRemove(menudata.item.id);
              }}
            >
              -
            </div>
            <div className={styles.mid}>
              <input type="number" value={count} />
            </div>
            <div
              className={styles.right}
              onClick={() => {
                setcount((prev) => prev + 1);
                handleClick({
                  id: menudata.item.id,
                  name: menudata.item.name,
                  price: menudata.item.price,
                });
              }}
            >
              +
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
