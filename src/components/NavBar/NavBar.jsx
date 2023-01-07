import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./navbar.css";

function NavBar() {
  let activeStyle = {
    color: "black",
    fontWeight: "bolder",
  };

  return (
    <nav className="nav-menu">
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/"
      >
        Inicio
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/category/laptops"
      >
        Laptops
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/category/smartphones"
      >
        Smartphones
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/category/fragrances"
      >
        Fragrances
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/category/skincare"
      >
        Skincare
      </NavLink>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
