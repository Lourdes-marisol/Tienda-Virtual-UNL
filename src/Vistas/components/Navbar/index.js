import React from 'react';
import {
  Nav,
  NavBtn,
  NavLink,
  NavMenu,
  Button,
  ButtonC,
  Imput,
  Cabecera,
} from './NavbarElements';
const Navbar = () => {
  return (
    <>
    <Cabecera>
      <Imput placeholder="Ingrese aqui su busqueda">
      </Imput>
      <NavBtn>
        <Button to='/carrito' activeStyle>
            ""
        </Button>
        <ButtonC>
          ""
        </ButtonC>
      </NavBtn>
    </Cabecera>
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