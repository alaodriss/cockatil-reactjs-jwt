import React from "react";
// c'est mieux d'utiliser C. NavLink
import { Link, NavLink } from "react-router-dom";

import "./header.css";

//Navigation Router Link et Header

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink
            // ici on a fait une conditon avec Style pour affiche la page isActive
              style={({ isActive }) => {
                return { color: isActive ? "skyblue" : '',
                borderBottom: isActive ? "#15b0ab solid 1px": '',};
              }}
              to="/home"
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return { color: isActive ? "skyblue" : " ",  borderBottom: isActive ? "#15b0ab solid 1px": '', };
              }}
              to="/service"
            >
              Service
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return { color: isActive ? "skyblue" : " ",  borderBottom: isActive ? "#15b0ab solid 1px": '', };
              }}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
