import React from "react";
import Header from "../components/Header";
import styles from "../styles/home/home.module.scss";

export default function HomePage() {
  return (
    <div className={styles.home}>
      <div className={styles.bg}>
        <img src="https://i.ibb.co/1zFGLBc/Wankhede-ICC-WCF.jpg" alt="" />
      </div>

      <Header />
      <div className={styles.main}>
        <div className={styles.banner}>
          <div className={styles.left}>
            <p className={styles.herotext}>Duniya Hila Denge Hum… </p>
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
          </div>
          <div className={styles.right}>
            <img
              src="https://i.ibb.co/swyNW15/wp7454010-removebg-preview.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
