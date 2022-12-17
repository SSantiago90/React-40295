import { useContext } from "react";
import React from "react";
import { cartContext } from "../../storage/cartContext";

function CartWidget() {
  const valueContext = useContext(cartContext);
  const totalItems = valueContext.totalItemsInCartfn();

  //2. Rendering condicional con operadores lógicos -> &&
  return (
    <div>
      <span>🛒</span>
      {totalItems > 0 && <span>{totalItems}</span>}
    </div>
  );
}

export default CartWidget;
