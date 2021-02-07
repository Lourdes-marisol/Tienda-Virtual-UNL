import "./../css/ModificarDatos.css";

import { Button } from 'react-bootstrap';

import { useState } from "react";
import "./../components/mainAdmin/Main.css";
import Main from "./../components/mainAdmin/Main";
import Navbar from "./../components/navbarAdmin/Navbar";
import Sidebar from "./../components/sidebarAdmin/Sidebar";

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
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <div className="main__container">
        
      
      
      <h1> Modificar datos de la cuenta </h1>
      
      <h3> Contraseña </h3>
      
      <input  type="password" placeholder = "Ingrese su contraseña actual"/> 
       <input  type="password" placeholder = "Ingrese su contraseña nueva"/> 
        <input  type="password" placeholder = "Ingrese su contraseña nueva otra vez"/> 
        
        <button className = "button" onclick="myFunction()">Cambiar contraseña</button>
        
    
      </div>
      
     <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
    </main>
  );
  
};


export default ModificarDatos;