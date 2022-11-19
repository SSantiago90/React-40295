import React from "react";
import "./item.css";

function Item(props) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={props.imgurl} alt="imagen producto"></img>
      </div>
      <div className="card-detail">
        <h2>{props.title}</h2>
        <h4>$ {props.price}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Item;
