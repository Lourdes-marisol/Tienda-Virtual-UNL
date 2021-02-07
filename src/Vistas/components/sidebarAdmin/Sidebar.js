import "./Sidebar.css";
import logo from "../../assets/logo.png";
import GestionarProductos from "./../../pages/GestionarProductos";
import ModificarDatos from "./../../pages/ModificarDatos";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
    
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1>Administrador</h1>

        </div>


        
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link">
          <i className="fa fa-home"></i>
          <a href="#">Inicio</a>
        </div>
        
        <div className="sidebar__link active_menu_link">
       
          <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
          <a href="#">Modificar datos</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-cogs" aria-hidden="true"></i>
          <a href="#" >Gestionar productos</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-bar-chart" aria-hidden="true"></i>
          <a href="#">Reporte de ventas</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
          <a href="#">Restablecer cuenta</a>
        </div>
        
        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <a href="#">Cerrar Sesión</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
