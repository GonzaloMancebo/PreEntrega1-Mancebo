import logo from "./logo.svg";
import "./App.css";
import Destinos from "./components/Main";
import NavBar from "./components/NavBar/Navbar";
import React from "react";
import ItemListContainer from "./components/Main";

function App() {
  return (
    <div className="App">
      <div className="contenedor-titulo">
        <h1>VIAJA SEGURO CON NOSOTROS!!</h1>
      </div>
      <React.Fragment>
        <NavBar />
      </React.Fragment>
      <ItemListContainer
        nombre="BRASIL"
        detalle="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups"
        imagen="brasil"
      />

      <ItemListContainer
        nombre="CARIBE"
        detalle="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups"
        imagen="caribe"
      />

      <ItemListContainer
        nombre="ESPAÑA"
        detalle="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups"
        imagen="españa"
      />
      <ItemListContainer
        nombre="FRANCIA"
        detalle="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups"
        imagen="francia"
      />
      <ItemListContainer
        nombre="IRLANDA"
        detalle="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups"
        imagen="irlanda"
      />
      <ItemListContainer
        nombre="ISLANDIA"
        detalle="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups"
        imagen="islandia"
      />
      <ItemListContainer
        nombre="TULUM"
        detalle="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups"
        imagen="tulum"
      />
    </div>
  );
}

export default App;
