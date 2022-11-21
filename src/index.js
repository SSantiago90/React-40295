import React from "react";
import ReactDOM from "react-dom/client";
// Importando un compoente
import App from "./App";
// Imports globales
import "bootstrap/dist/css/bootstrap.css";
import * as bootstrap from "bootstrap";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

//renderizo mi componente
root.render(<App />);
