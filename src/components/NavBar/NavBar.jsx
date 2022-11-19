import React from "react";

//2 - Importar componente FontAwsomeIcon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// 3 - Importar icono deseado de alguna de la libreria de iconos gratuitos
import { faMusic } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <div>
      <h2>Titulo</h2>
      <ul>
        <li>Categoria A</li>
        <li>Categoria B</li>
        <li>Categoria C</li>
      </ul>
      <FontAwesomeIcon icon={faMusic} />
    </div>
  );
}

export default NavBar;
