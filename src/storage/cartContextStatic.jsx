import { createContext } from "react";

//1. inicializamos nuestro Context
const cartContext = createContext({ cart: [] });

//2. Extraemos el componente Provider
const Provider = cartContext.Provider;


//4. creamos nuesro propio Provider
function CartContextProvider(props){
    //3. Creamos un "value" para el provider
    let cart = [];
    let saludo = "hola desde context"

    return(
        <Provider value={ {cart: cart, saludo: saludo} }>
             {props.children}
        </Provider>
    )
}

export { cartContext, CartContextProvider };