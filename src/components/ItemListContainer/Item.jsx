import React, { useState, useEffect } from "react";
import "./item.css";

function Item(props) {
  const [isFavorite, setIsFavorite] = useState(false);
  // [variableDeEstado, setterDeLaVariable]

  function handleFavorite() {
    isFavorite === true ? setIsFavorite(false) : setIsFavorite(true);
    /*  setIsFavorite(!isFavorite); */
  }

  console.log("%cRender/update del componente", "color: green");

  useEffect(() => {
    console.log("%cLlamado a API/Database", "color: pink");
  }, []);

  useEffect(() => {
    console.log("%cUpdate del componente en useEffect", "color: yellow");
  });

  return (
    <div className="card">
      <button
        onClick={handleFavorite}
        className={isFavorite ? "card-favicon favorite" : "card-favicon"}
      >
        ♥
      </button>
      <div className="card-img">
        <img src={props.imgurl} alt="imagen producto"></img>
      </div>
      <div className="card-detail">
        <h2>{props.title}</h2>
        <h4 className="priceTag">$ {props.price}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Item;
