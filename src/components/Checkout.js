import React, { useEffect, useState } from "react";
import styles from "../styles/checkout.module.scss";
import QRCode from "react-qr-code";
export default function Checkout({
  cartitems,
  setcartitems,
  setcart,
  setshowmenu,
}) {
  const [done, setdone] = useState(false);
  const [data, setdata] = useState();
  function getitems() {
    let finalarr = [];
    cartitems.forEach((item) => {
      let index = finalarr.findIndex((dd) => dd.id === finalarr.id);
      if (index !== -1) {
        finalarr[index].quanity++;
      } else {
        finalarr.push({
          ...item,
          quantity: 1,
        });
      }
    });
    return finalarr;
  }
  function getTotal() {
    let price = 0;
    cartitems.forEach((item) => {
      price += item.price;
    });
    return price;
  }
  useEffect(() => {
    setdata((prev) => ({ ...prev, total_bill: getTotal(), items: cartitems }));
  }, [cartitems]);
  return (
    <div className={styles.checkoutpanel} id="menu-main">
      <div className={styles.bg} onClick={() => setshowmenu(false)}></div>
      <div className={styles.main}>
        <p className={styles.heading}>Checkout</p>
        {!done && (
          <div className={styles.scroll}>
            {getitems().length === 0 ? (
              <p style={{ marginTop: "25%", textAlign: "center" }}>
                {" "}
                Cart empty
              </p>
            ) : (
              getitems().map((item, index) => {
                return (
                  <div className={styles.row}>
                    <p>{index + 1}.</p>
                    <p>
                      {item.name} x {item.quantity}
                    </p>
                    <p>₹{item.price * item.quantity}</p>
                  </div>
                );
              })
            )}
          </div>
        )}
        {!done && getitems().length > 0 && (
          <>
            <input
              type="text"
              placeholder="Enter seat number"
              onChange={(e) =>
                setdata((prev) => ({
                  ...prev,
                  seat_number: e.target.value,
                }))
              }
            />
            <p className={styles.cash}>Payment Method : Cash</p>
            <p className={styles.cash} style={{ marginTop: 0 }}>
              Total : ₹ {getTotal()}
            </p>
            <div
              className={styles.btn}
              onClick={() => {
                setdone(true);
              }}
            >
              Order
            </div>
          </>
        )}
        {done && (
          <div className={styles.qr}>
            <QRCode value={JSON.stringify(data)} />
            <p>Please save this QR for recieving your order.</p>
            <div
              className={styles.btn}
              style={{ marginTop: 20 }}
              onClick={() => {
                setcartitems([]);
                setcart(0);
                setshowmenu(false);
              }}
            >
              Done
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
