import React from "react";
import CardWidget from "../CardWidget/CardWidget";

function Navbar() {
  return (
    <div className="contenedor-nav">
      <nav className="nav">
        <div>
          <a href="/#">Inicio</a>
        </div>
        <ul className="nav_list">
          <li>
            <a className="nav_link" href="/#">
              Mas Destinos!
            </a>
          </li>
          <li>
            <a className="nav_link" href="/#">
              <CardWidget />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
