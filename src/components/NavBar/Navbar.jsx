import React from "react";
import CardWidget from "../CardWidget/CardWidget";

function Navbar() {
  return (
    <div className="contenedor-nav">
      <nav className="nav">
        <div>
        <ul className="nav_list">
        <li><Link className="link" to= {"/Inicio"}></Link></li>
        <li><Link className="link" to= {"/Mas Destinos"}></Link></li>
        <li><Link className="link" to= {"/Comentarios"}></Link></li>
        </ul>
        </div>
        </nav>

    </div>
  );
}
export default Navbar;
