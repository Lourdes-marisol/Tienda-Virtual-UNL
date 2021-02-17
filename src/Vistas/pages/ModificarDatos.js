import React from 'react';
import { useState } from "react";
import "./../css/ModificarDatos.css";
import "./../components/mainAdmin/Main.css";
import Navbar from "./../components/navbarAdmin/Navbar";
import Sidebar from "./../components/sidebarAdmin/Sidebar";
import "./../css/Admin.css";

const ModificarDatos = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  return (
    <main>
      <div className="titulo">
        componentWillmount(){
          document.title = "Modificar | FDEL"
        }
      </div>
      <div className="container">
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
        <div className="main__container">

          <div className="h1">
            <h4> Modificar datos de la cuenta </h4>
          </div>

          <h3> Contraseña </h3>
          <div className="input1">
            <input type="password" placeholder="Ingrese su contraseña actual" />
          </div>
          <div className="input1">
            <input type="password" placeholder="Ingrese su contraseña nueva" />
          </div>
          <div className="input1">
            <input type="password" placeholder="Ingrese su contraseña nueva otra vez" />
          </div>
          <button className="button1" onclick="myFunction()">Cambiar contraseña</button>

        </div>
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      </div>

    </main>
  );

};


export default ModificarDatos;