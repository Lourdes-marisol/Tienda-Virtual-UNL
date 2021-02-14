import { useState } from "react";
import "./../css/GestionarProductos.css";
import "./../components/mainAdmin/Main.css";
import Navbar from "./../components/navbarAdmin/Navbar";
import Sidebar from "./../components/sidebarAdmin/Sidebar";
import "./../css/Admin.css";
import Table from 'react-bootstrap/Table'

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
      <div className="h1">
      <h4> Gestionar Productos </h4>
      
      </div>
      <input type="text" placeholder = "Buscar"/>
      <div className="des">
      
      <button className = "button" onclick="myFunction()">Descuentos</button>
      <button className = "button" onclick="myFunction()">Agregar producto</button>
      </div>
     <Table responsive bordered bordered hover >
  
    
      <th>ID</th>
      <th>Nombre</th>
      <th>Categoria</th>
      <th>Stock</th>
      <th>Precio</th>
      <th>Estado</th>
      <th>Descuento</th>
      <th>..</th>
      <th>..</th>
    
  
  <tbody>
    <tr>
      <td>1</td>
      {Array.from({ length: 6 }).map((_, index) => (
        <td key={index}>...</td>
      ))}
      <button className = "button" onclick="myFunction()">""</button>

    </tr>
    <tr>
      <td>2</td>

      {Array.from({ length: 6 }).map((_, index) => (
        <td key={index}>...</td>
      ))}
      <button className = "button" onclick="myFunction()">""</button>
      
    </tr>
    <tr>
      <td>3</td>
      {Array.from({ length: 6 }).map((_, index) => (
        <td key={index}>...</td>
      ))}
      <button className = "button" onclick="myFunction()">""</button>
    </tr>
  </tbody>
</Table>
      </div>
     <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
    
  );
};

export default GestionarProductos;