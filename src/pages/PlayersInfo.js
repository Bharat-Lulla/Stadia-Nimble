import React from "react";
import Header from "../components/Header";
import styles from "../styles/PlayersInfo.module.scss";
import { playerData } from "../playersInfo/rawData";
import CardBox from "../atoms/Card";

const PlayersInfo = () => {
  return (
    <div className={styles.playerInfo}>
      <div className={styles.bg}>
        <img src="https://i.ibb.co/1zFGLBc/Wankhede-ICC-WCF.jpg" alt="" />
      </div>
      <Header />

      <div className={styles.main}>
        <p className={styles.heroheading}>Team</p>

        <div className={styles.wrapper}>
          {playerData.map((item) => {
            return (
              <CardBox
                img={`https://www.mumbaiindians.com/static-assets/images/players/large/${item.id}.png`}
                title={item.name}
                description={item.skill_name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PlayersInfo;
