import React from 'react';
import { useState } from "react";

import "./../components/mainAdmin/Main.css";
import Navbar from "./../components/navbarAdmin/Navbar";
import Sidebar from "./../components/sidebarAdmin/Sidebar";
import "./../css/Admin.css";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "./../css/AgregarProducto.css";

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
      <div clas sName="titulo">
        componentWillmount(){
          document.title = "Agregar Producto | FDEL"
        }
      </div>

      <div className="container">
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
        <div className="main__container">
          <div className="h1">
            <h4> Agregar Productos </h4>

          </div>
          <div className="input">
            <input placeholder="Nombre" />

          </div>
          <Input type="select" placeholder="Talla">
            <option>Categoria</option>
            <option>X</option>
            <option>M</option>

          </Input>
          <div className="input">
            <input placeholder="Precio" />
          </div>
          <div className="input">
            <h5>Imagen:</h5>
            <input type="file" />
          </div>
          <div className="input">
            <Input type="select" placeholder="Talla">
              <option>Talla</option>
              <option>X</option>
              <option>M</option>

            </Input>




          </div>
          <input className="desc" placeholder="Descripción" />
          <button className="button3" onclick="myFunction()">Cancelar</button>
          <button className="button3" onclick="myFunction()">Añadir Producto</button>
        </div>
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      </div>

    </main>
  );

};


export default ModificarDatos;