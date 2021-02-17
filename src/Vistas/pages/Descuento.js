import React from 'react';
import { useState } from "react";
import "./../css/Descuento.css";
import "./../components/mainAdmin/Main.css";
import Navbar from "./../components/navbarAdmin/Navbar";
import Sidebar from "./../components/sidebarAdmin/Sidebar";
import "./../css/Admin.css";

const Descuento = () => {
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
      <h4> Descuentos </h4>
      </div>
      <div className="pre">
      <input  placeholder = "Precio"/> 
         <h5>%</h5>
         </div>
         <div className="ttext">
         <h4>0.00 ---> 0.00</h4>
         </div>
         
         <button className = "buttondes" onclick="myFunction()">Aplicar</button>
         <button className = "buttondes" onclick="myFunction()">Cancelar</button>
      </div>
     <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
   
    </main>
  );
  
};


export default Descuento;