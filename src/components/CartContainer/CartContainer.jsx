import React, { useContext } from "react";
import { cartContext } from "../../storage/cartContext";
//1. Traer el array del context
//2. desgloasar o "mapear" los items

function CartContainer() {
  const { cart, removeItem } = useContext(cartContext);

  //render condicional -> "carrito vacío , volvé al inicio"

  return (
    <div>
      <h1>Tu carrito</h1>
      {cart.map((item) => (
        <div>
          <h3>{item.title}</h3>
          <p>cantidad: {item.count}</p>
          <p>$ {item.price}</p>
          <h4>total: ${}</h4>
          <button>X</button>
        </div>
      ))}
    </div>
  );
}

export default CartContainer;
