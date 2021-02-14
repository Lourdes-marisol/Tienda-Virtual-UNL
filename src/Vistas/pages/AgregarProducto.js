import React from 'react';
import { useState } from "react";

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
      <div className="h1">
      <h4> Agregar Productos </h4>
      
      </div>
      
         
      </div>
     <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
   
    </main>
  );
  
};


export default ModificarDatos;