import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/header/header.module.scss";
export default function Header() {
  const tabs = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/shop" },
    { name: "Socials", link: "/socials" },
    { name: "Stadium", link: "/" },
    { name: "Upcoming Matches", link: "/upcomingMatches" },
    { name: "Ongoing Matches", link: "/ongoingMatches" },
    { name: "Team", link: "/playersInfo" },
    // { name: "Players", link: "/playersInfo" },
  ];
  return (
    <div className={styles.header}>
      <img
        className={styles.image}
        src="https://i.ibb.co/Jp4ZrS1/Mumbai-Indians-Logo-svg.png"
        alt=""
      />
      <div className={styles.tabs}>
        {tabs.map((item) => {
          return (
            <div className={styles.tab}>
              <Link to={item.link}>{item.name}</Link>
            </div>
          );
        })}
      </div>
      {/* <div className={styles.btn}>Sign in</div> */}
    </div>
  );
}
