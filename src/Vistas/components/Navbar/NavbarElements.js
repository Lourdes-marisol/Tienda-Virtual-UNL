import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavSpace = styled.label`
    background: #080808  ;
    height: 100px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((160vw - 1000px) / 2);
    z-index: 10;

    color: #fff;
    text-decoration: none;
    cursor: ;
    
`
;
export const Nav = styled.nav`
  background: #FEFEFE ;
  height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  
`;

export const NavLink = styled(Link)`
  color: #080808;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #15cdfc;
  }
`;



export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  /* Second Nav */
  /* margin-right: 24px; */

  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const Button = styled(Link)`
border-radius: 4px;
background: #5A060F ;
padding: 10px 35px;
color: #fff;
outline: none;
border: none;
cursor: pointer; 
text-decoration: none;

margin-left: 24px;

}
`;

export const Input = styled.input`
  color: #968D8E;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  height: 30px;
  width: 600px;
`;


