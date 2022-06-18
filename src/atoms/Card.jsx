import React from "react";
import "./Card.scss";
import Card from "react-animated-3d-card";

export default function CardBox(props) {
  return (
    <Card
      style={{
        backgroundColor: "red",
        cursor: "pointer",
      }}
      onClick={() => console.log("Card clicked")}
    >
      <div className="card">
        <img src={props.img} className="card__img" />
        <div className="card__body">
          <h2 className="card__title">{props.title}</h2>
          <p className="card__description">{props.description}</p>
        </div>
      </div>
    </Card>
  );
}
