import React from "react";
import Card from "../atoms/Card";
import "./PlayersInfo.scss"

const PlayersInfo = () => {
    return (
        <div className="wrapper">
          
          <Card
            img="./img/0a1e047c6c77047eb7df852508b8eb0e.jpg"
            title="Players Name"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          />
    
          <Card
            img="./img/927196-boult-mi.webp"
            title="Players Name"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          />
          <Card
            img="./img/f2eb3788a6521d5da89ea00f04a7b7cb.png"
            title="Players Name"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          />
          <Card
            img="./img/pandya-m.jpg"
            title="Players Name"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          />
        </div>
      );
}

export default PlayersInfo;