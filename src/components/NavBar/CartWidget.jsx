import { useContext } from "react"
import React from 'react'
import { cartContext } from "../../storage/cartContext"

function CartWidget() {
  const valueContext = useContext(cartContext);
  
  return (
    <div> 
        <span>🛒</span>
        <span>{valueContext.totalItemsInCartfn()}</span>
    </div>
  )
}

export default CartWidget