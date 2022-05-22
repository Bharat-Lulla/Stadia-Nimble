import React from "react";

import "./Card.scss"

function Card(props) {
    return (
      <div className="card">
        <img src={props.img} className="card__img" />
        <div className="card__body">
          <h2 className="card__title">{props.title}</h2>
          <p className="card__description">{props.description}</p>
          <button className="card__btn">View More</button>
        </div>
      </div>
    );
  }

export default Card;