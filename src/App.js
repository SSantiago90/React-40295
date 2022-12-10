import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./pages/Contacto";
import NavBar from "./components/NavBar/NavBar";

import { CartContextProvider } from "./storage/cartContext";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar onNavigate={(ruta)=>console.log("Estas navegando a la ruta", ruta)}/>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryID" element={<ItemListContainer />} />
          <Route path="/item/:itemID" element={<ItemDetailContainer />} />
          <Route path="/contacto/" element={<Contacto />} />
          <Route path="*" element={<h1>404: Recurso no encontrado</h1>} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
