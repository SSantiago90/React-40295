import React from "react";
import Flex from "../Flex/Flex";
import Item from "./Item";

function ItemList(props) {
  return (
    <Flex>
      {props.products.map((item) => (
        <Item
          key={item.id}
          title={item.title}
          img={item.img}
          price={item.price}
          description={item.description}
        />
      ))}
    </Flex>
  );
}

export default ItemList;
