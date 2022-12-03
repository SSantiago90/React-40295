import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  let activeStyle = {
    color: "red",
    textDecoration: "underline",
  };

  return (
    <nav className="navbar">
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
    </nav>
  );
}

export default NavBar;
