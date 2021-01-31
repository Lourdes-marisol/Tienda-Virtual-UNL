import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavSpace,
  Button,
  Input,
} from './NavbarElements';
const Navbar = () => {
  return (
    <>
    <NavSpace>
      <h1>FEDEL</h1>
      <Input placeholder="Ingrese su búsqueda " type="text" />
    <NavBtn>
          <Button to='/carrito'>Carrito</Button>
        </NavBtn>
        <NavBtn>
          <Button to='/micuenta'>Mi cuenta</Button>
        </NavBtn>
          </NavSpace>
      <Nav>
        <NavMenu>
        <NavLink to='/mujeres' activeStyle>
            MUJERES
          </NavLink>
          <NavLink to='/hombres' activeStyle>
            HOMBRES
          </NavLink>
          <NavLink to='/accesorios' activeStyle>
            ACCESORIOS
          </NavLink>
          <NavLink to='/novedades' activeStyle>
            NOVEDADES
          </NavLink>
          <NavLink to='/catalogo' activeStyle>
            CATALOGO
          </NavLink> <NavLink to='/informacion' activeStyle>
            QUIENES SOMOS
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
export default Navbar;
