import React from "react";
import { Jelly } from "@uiball/loaders";

function Loader(props) {
  const colorLoader = props.color || "purple";

  return (
    <>
      <Jelly size={200} speed={0.4} color={colorLoader} />
    </>
  );
}

export default Loader;
