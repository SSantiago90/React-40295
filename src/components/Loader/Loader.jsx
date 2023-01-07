import React from "react";
import { Jelly } from "@uiball/loaders";

function Loader(props) {
  const colorLoader = props.color || "purple";

  return (
    <div style={{ display: "block", width: "100%" }}>
      <Jelly size={200} speed={0.4} color={colorLoader} />
    </div>
  );
}

export default Loader;
