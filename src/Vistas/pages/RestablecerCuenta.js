import React from 'react';
import { useState } from "react";
import "./../css/RestablecerCuenta.css";
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
  
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <div className="main__container">      
      
      <div className = "h1">
      <h4> Restablecer cuenta </h4>
      </div>
      <div className="red">
      
      <h3> Advertencia: </h3>
      </div>
      <div className="Te">
      <h4> Si restableces tu cuenta, los datos volverán a ser como en un inicio. </h4>
      </div>
        <button className = "button4" type="outline" onclick="myFunction()">Restablecer cuenta</button>
         
      </div>
     <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
   
    </main>
  );
  
};


export default ModificarDatos;