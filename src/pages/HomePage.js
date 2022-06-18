import React from "react";
import Header from "../components/Header";
import styles from "../styles/home/home.module.scss";
import Card from "react-animated-3d-card";
import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <div className={styles.home}>
      <div className={styles.bg}>
        <img
          src="https://lh3.ggpht.com/p/AF1QipPC2TxhaBy4H6h-kRWNaA_RRg9r_zjEmxyRxUIJ=s1536"
          alt=""
        />
      </div>

      <Header />
      <div className={styles.main}>
        <Link to="/stadium">
          <img
            className={styles.mca}
            src="https://i.ibb.co/drFRJVp/76318531-1-removebg-preview.png"
            alt=""
          />
        </Link>

        <div className={styles.banner}>
          <div className={styles.left}>
            <p className={styles.herotext}>Welcome to Wankhede Stadium - MCA</p>
            <Card
              style={{
                backgroundColor: "red",
                cursor: "pointer",
                marginTop: "20px",
              }}
              onClick={() => console.log("Card clicked")}
            >
              <div className={styles.last}>
                <div className={styles.last_top}>
                  <div className={styles.last_left}>
                    <img src="https://i.ibb.co/BVJLkQn/index.png" alt="" />
                    <p>DC</p>
                  </div>
                  <div className={styles.last_mid}>
                    <div className={styles.col}>
                      <p className={styles.score}>159/7</p>
                      <p className={styles.over}>(20)</p>
                    </div>
                    <div className={styles.col}>
                      <p className={styles.score}>160/5</p>
                      <p className={styles.over}>(19.1)</p>
                    </div>
                  </div>
                  <div className={styles.last_right}>
                    <img
                      src="https://i.ibb.co/Jp4ZrS1/Mumbai-Indians-Logo-svg.png"
                      alt=""
                    />
                    <p>MI</p>
                  </div>
                </div>
                <div className={styles.last_bottom}>
                  {`MI won by 5 wickets (5 balls left)`}
                </div>
              </div>
            </Card>
          </div>
          <div className={styles.right}>
            <Link to="/shop">
              <img
                src="https://i.ibb.co/swyNW15/wp7454010-removebg-preview.png"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
