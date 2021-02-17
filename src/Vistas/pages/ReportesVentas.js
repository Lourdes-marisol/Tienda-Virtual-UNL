import { useState } from "react";
import "./../css/ReportesVentas.css";
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
      <h4> ReportesVentas </h4>
      
      </div>
      <div className="fecha">
      <h5>Fecha inicio:</h5>
      <input type="text" placeholder = "dd/mm/aa"/>
      
      </div>
       <div className="fecha">
       <h5>Fecha final:</h5>
      <input type="text" placeholder = "dd/mm/aa"/>
      
      </div>
      <div className="bus">
      <input type="text" placeholder = "Buscar"/>
      </div>
      
      
     <Table responsive bordered bordered hover >
  
    
      <th>Fecha</th>
      <th>N. de venta</th>
      <th>Cliente</th>
      <th>Precio</th>
      <th>Cantidad</th>
      <th>Total</th>
      
    
  
  <tbody>
    <tr>
      <td>1</td>
      {Array.from({ length: 6 }).map((_, index) => (
        <td key={index}>...</td>
      ))}
      

    </tr>
    <tr>
      <td>2</td>

      {Array.from({ length: 6 }).map((_, index) => (
        <td key={index}>...</td>
      ))}
      
      
    </tr>
    <tr>
      <td>3</td>
      {Array.from({ length: 6 }).map((_, index) => (
        <td key={index}>...</td>
      ))}
     
    </tr>
  </tbody>
</Table>
      </div>
     <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
    
  );
};

export default GestionarProductos;