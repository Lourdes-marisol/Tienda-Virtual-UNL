import "./Navbar.css";
import avatar from "../../assets/avatar.png";
import React from "react";

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="navbar__left">
      <a >FDEL</a>
        <a href="#"></a>
        <a href="#"></a>
        <a className="active_link" href="#">
         
        </a>
      </div>
      <div className="navbar__right">
        
        <a href="#!">
          <img width="30" src={avatar} alt="avatar" />
        </a>
        <a >Administrador</a>
      </div>
    </nav>
  );
};

export default Navbar;
