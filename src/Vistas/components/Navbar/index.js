import React from "react";
import { Link } from 'react-router-dom';
import Carrito from '../../images/carrito.svg';
import Cuenta from '../../images/usuario.svg';
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import '../../css/stylesNavbar.css';
const Navbar = () => {
  return (
    <body>
      <div className="cabecera">
        <h1 className="title">FDEL</h1>
        <input className="buscar" placeholder="Ingrese aquí su búsqueda" />
        <Link className="carroC" to="/carrito">
          <img src={Carrito} alt="" width="35" />;
            </Link>
        <Link className="cuentaC" to="/ModificarDatos">
          <img src={Cuenta} alt="" width="35" />;
            </Link>
      </div>
      <Nav>
        <NavMenu>
          <NavLink to="/mujeres" activeStyle>
            MUJERES
          </NavLink>
          <NavLink to="/hombres" activeStyle>
            HOMBRES
          </NavLink>
          <NavLink to="/accesorios" activeStyle>
            ACCESORIOS
          </NavLink>
          <NavLink to="/novedades" activeStyle>
            NOVEDADES
          </NavLink>
          <NavLink to="/catalogo" activeStyle>
            CATALOGO
          </NavLink>
          <NavLink to="/informacion" activeStyle>
            QUIENES SOMOS
          </NavLink>
          <NavLink to="/Registro" activeStyle>
            REGISTRARSE
          </NavLink>
          <NavLink to="/iniciarSesion" activeStyle>
            INGRESAR
          </NavLink>
        </NavMenu>
      </Nav>
    </body>
  );
};
export default Navbar;
