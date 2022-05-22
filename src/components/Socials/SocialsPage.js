import React from "react";
import styles from "../../styles/socials.module.scss";
import Header from "../Header";
export default function SocialsPage() {
  return (
    <div className={styles.socials}>
      <div className={styles.bg}>
        <img src="https://i.ibb.co/1zFGLBc/Wankhede-ICC-WCF.jpg" alt="" />
      </div>

      <Header />

      <div className={styles.main}>
        <p className={styles.heroheading}>Mi Social</p>
        <div className={styles.wrapper}></div>
      </div>
    </div>
  );
}
