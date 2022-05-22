import React, { useState } from "react";
import styles from "../../styles/shopitem.module.scss";

export default function ShopItem() {
  const [count, setcount] = useState(0);
  return (
    <div className={styles.shopitem}>
      <img
        className={styles.shopItemImage}
        src="https://i.ibb.co/r2jyZ9F/8907880533999-1-9827.webp"
        alt=""
      />
      <p
        className={styles.name}
      >{`MI: (Rohit 45) Official Match Jersey 2022`}</p>
      <p className={styles.description}>
        {`Official MI: Official Match Jersey 2022 (Rohit 45). One Family! The
        Official Mumbai Indians Collared Jersey is finally here and this is your
        chance to cheer for the men in blue and gold and join the MI Paltan!
        Show some love for the boys who are ready to kill it in the IPL once
        again with their 'Duniya Hila Denge' performance! Wear this Jersey as
        you cheer for Rohit and the gang!`}
      </p>
      <div className={styles.checkoutitem}>
        <div
          className={styles.left}
          onClick={() => setcount((prev) => (prev === 0 ? 0 : prev - 1))}
        >
          -
        </div>
        <div className={styles.mid}>
          <input type="number" value={count} />
        </div>
        <div
          className={styles.right}
          onClick={() => setcount((prev) => prev + 1)}
        >
          +
        </div>
      </div>
      <div className={styles.btn}>Buy</div>
    </div>
  );
}
