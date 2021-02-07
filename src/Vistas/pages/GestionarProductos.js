import "./../css/GestionarProductos.css";
import { useState } from "react";
import "./../components/mainAdmin/Main.css";
import Main from "./../components/mainAdmin/Main";
import Navbar from "./../components/navbarAdmin/Navbar";
import Sidebar from "./../components/sidebarAdmin/Sidebar";

const GestionarProductos = () => {
const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  return (
    
  
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <div className="main__container">
        
      <h1> Gestionar Productos </h1>
      </div>
      
     <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
    
  );
};

export default GestionarProductos;