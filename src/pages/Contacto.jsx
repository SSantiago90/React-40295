import React, {useContext} from "react";
import { cartContext } from "../storage/cartContext";

//5. nos conectamos al Context con UseContext
function Contacto() {
  //6. Obtenemos el value del Provider de ese context
  const miContexto = useContext(cartContext);
  console.log(miContexto.saludo);

  return (
    <div>
      <h1>Contacto</h1>
      <p>Hola gracias por contactarnos</p>
    </div>
  );
}

export default Contacto;
