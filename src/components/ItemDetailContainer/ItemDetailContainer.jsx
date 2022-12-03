import React, { useState, useEffect } from "react";
import { getSingleItem } from "../../services/mockService";
import { useParams } from "react-router-dom";
import "./itemdetail.css";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  
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
      {/* <ItemCount> */}
    </div>
  );
}

export default ItemDetailContainer;
