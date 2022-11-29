import logo from "./logo.svg";
import "./App.css";
import Destinos from "./components/Main";
import NavBar from "./components/NavBar/Navbar";
import React from "react";


function App() {
  return (
    <div className="App">
      <div className="contenedor-titulo">
        <h1>VIAJA SEGURO CON NOSOTROS!!</h1>
      </div>
      <React.Fragment>
      <NavBar />

      </React.Fragment>
      <Destinos
        nombre="BRASIL"
        detalle="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups"
        imagen="brasil"
      />

      <Destinos
        nombre="CARIBE"
        detalle="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups"
        imagen="caribe"
      />

      <Destinos
        nombre="ESPAÑA"
        detalle="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups"
        imagen="españa"
      />
      <Destinos
        nombre="FRANCIA"
        detalle="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups"
        imagen="francia"
      />
      <Destinos
        nombre="IRLANDA"
        detalle="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups"
        imagen="irlanda"
      />
      <Destinos
        nombre="ISLANDIA"
        detalle="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups"
        imagen="islandia"
      />
      <Destinos
        nombre="TULUM"
        detalle="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups"
        imagen="tulum"
      />
    </div>
  );
}

export default App;
