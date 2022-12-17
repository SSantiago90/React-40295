import React, { useState, useEffect } from "react";
import { getSingleItem } from "../../services/mockService";
import { useParams } from "react-router-dom";
import "./itemdetail.css";

import ItemDetail from "./ItemDetail";
import Loader from "../Loader/Loader";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let { itemID } = useParams();

  async function getData() {
    let respuesta = await getSingleItem(itemID);
    setProduct(respuesta);
    setIsLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  // 1. Rendering con condicional ternario
  return (
    <>
      <h2>Detalle del producto</h2>
      {isLoading ? <Loader color="green" /> : <ItemDetail product={product} />}
    </>
  );
}

export default ItemDetailContainer;
