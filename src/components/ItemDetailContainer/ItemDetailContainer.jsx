import React, { useState, useEffect, useContext } from "react";
import { getSingleItem } from "../../services/mockService";
import { Link, useParams } from "react-router-dom";
import "./itemdetail.css";
import ItemCount from "./ItemCount/ItemCount";
import { cartContext } from "../../storage/cartContext";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const [countInCart, setCountInCart] = useState(0)
  
  const { addToCart, removeItem } = useContext(cartContext);

  let { itemID } = useParams();

  /* useEffect(() => {
    getSingleItem(itemID)
      .then((respuesta) => {
        setProduct(respuesta);
      })
      .catch((error) => alert("Item no encontrado"));
  }, []); */

  async function getData(){
    let respuesta = await getSingleItem(itemID)
    setProduct(respuesta)
  }

  useEffect( () =>{
    getData();
  }, [])
  
  function handleAddToCart(count) {
      //1. Guardar la cantidad en un estado
      setCountInCart(count);
      addToCart(product, count)
      //2. ocultar el itemCount . . .
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
      <ItemCount onAddToCart={handleAddToCart}/>
      
      <button onClick={()=>removeItem(product.id)}></button>
      <Link to="/cart">Ir al carrito</Link>
    </div>
  );
}

export default ItemDetailContainer;
