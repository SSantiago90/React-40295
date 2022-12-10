import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./navbar.css";

function NavBar(props) {
  let activeStyle = {
    color: "red",
    textDecoration: "underline",
  };

  //onNavigate

  return (
    <nav onClick={()=>props.onNavigate("/contacto")} className="nav-menu">
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/"
      >
        Inicio
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/item/1"
      >
        Detalle
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/contacto"
      >
        Contacto
      </NavLink>
      <CartWidget/>
    </nav>
  );
}

export default NavBar;
