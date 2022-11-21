import React from 'react'

function Flex(props) {
  const styleFlex = { display: "flex", width: "100%", justifyContent: "space-evenly"}
  
  return (
    <div style={styleFlex}>
      {props.children}
    </div>
  )
}

export default Flex