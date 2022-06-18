import React, { useState, useEffect } from "react";

import { getMatches } from "../api/api";
import MyCard from "../components/MatchCard";
import { Container, Grid } from "@material-ui/core";
import { matches } from "../playersInfo/rawData";
import styles from "../styles/fixtures.module.scss";
import Header from "../components/Header";
import MatchCard from "../components/MatchCard";
const Fixtures = () => {
  return (
    <div className={styles.playerInfo}>
      <div className={styles.bg}>
        <img src="https://i.ibb.co/1zFGLBc/Wankhede-ICC-WCF.jpg" alt="" />
      </div>
      <Header />

      <div className={styles.main}>
        <p className={styles.heroheading}>Upcoming Matches</p>
        {matches
          .filter(
            (item) =>
              item.participants[0].id === "1111" ||
              item.participants[1].id === "1111"
          )
          .map((item) => {
            return <MatchCard match={item} />;
          })}
      </div>
    </div>
  );
};

export default Fixtures;
