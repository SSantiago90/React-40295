import React, { useState, useEffect } from "react";

function ToggleButton(props) {
  const [isFavorite, setIsFavorite] = useState(false);
  // [variableDeEstado, setterDeLaVariable]

  function handleFavorite() {
    isFavorite === true ? setIsFavorite(false) : setIsFavorite(true);
    /*  setIsFavorite(!isFavorite); */
  }
  /* 
  console.log("%cRender/update del componente", "color: green");

  useEffect(() => {
    console.log("%cLlamado a API/Database", "color: pink");
  }, []);

  useEffect(() => {
    console.log("%cUpdate del componente en useEffect", "color: yellow");
  }); */

  return (
    <button
      onClick={handleFavorite}
      className={isFavorite ? "card-favicon favorite" : "card-favicon"}
    >
      {props.icon}
    </button>
  );
}

export default ToggleButton;
