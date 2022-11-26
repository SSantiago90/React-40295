import React, { useState, useEffect } from "react";
// 1. importar la Promise
import getItems from "../../services/mockService";
import ItemList from "./ItemList";

function ItemListContainer() {
  console.log("%cRender/update", "color: green");
  //2. Creamos un estado para nuestros productos
  const [products, setProducts] = useState([]);

  //3. Creamos un efecto de montaje
  useEffect(() => {
    //4. Llamamos a la promise, y guardamos la respuesta en un estado
    getItems().then((respuesta) => setProducts(respuesta));
  }, []);

  return <ItemList products={products} />;
}

export default ItemListContainer;
