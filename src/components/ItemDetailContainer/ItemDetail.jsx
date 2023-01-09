import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount/ItemCount";
import { cartContext } from "../../storage/cartContext";

function ItemDetail({ product }) {
  const [countInCart, setCountInCart] = useState(0);

  const { getItemCountfromCart, addToCart } = useContext(cartContext);

  function handleAddToCart(count) {
    //1. Guardar la cantidad en un estado
    setCountInCart(count);
    //2. ocultar el itemCount . . .
    addToCart(product, count);
  }

  function calcStock() {
    let cantInCart = getItemCountfromCart(product.id);
    console.log("Cantidad->", cantInCart);
    if (cantInCart) return product.stock - cantInCart;
    else return product.stock;
  }

  return (
    <div className="card-detail_main">
      <div className="card-detail_img">
        <img src={product.img} alt={product.title} />
      </div>
      <div className="card-detail_detail">
        <h1>{product.title}</h1>
        <h4 className="priceTag">$ {product.price}</h4>
        <p>{product.description}</p>
      </div>
      <Link to="/cart">Ir al carrito</Link>
      {calcStock() >= 1 ? (
        <ItemCount stock={calcStock()} onAddToCart={handleAddToCart} />
      ) : (
        <h3>No hay stock disponible</h3>
      )}
    </div>
  );
}

export default ItemDetail;
