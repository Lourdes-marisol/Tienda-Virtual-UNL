import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Cabecera = styled.nav`
  background-color: white ;
  height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  `;

export const Nav = styled.nav`
  background: black;
  height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  
`;

export const NavLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &:hover{
      color: #15cdfc;
  }

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
  justify-content: space-between;
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;


export const Button = styled.button`
  background-image: url("https://www.flaticon.es/svg/vstatic/svg/833/833400.svg?token=exp=1612318088~hmac=df3318c929a68fb2511b8f12daba7abf");
  font-size: 1em;
  width: 150%;
  height: 75%;
  margin: 1em;
  padding: 0.25em 1em;
  border: 10px;
	font-size: 14px;
  color: black;
  cursor: pointer;

  &:hover{
    background-color: white;
    color:  black;

  }
`;

export const ButtonC = styled.button`
  background-image: url("https://www.flaticon.es/svg/vstatic/svg/709/709722.svg?token=exp=1612318212~hmac=a12196bad504a8d5985f2352bf41d9af");
  font-size: 1em;
  width: 150%;
  height: 75%;
  margin: 1em;
  padding: 0.25em 1em;
  border: 10px;
	font-size: 14px;
  color: black;
  cursor: pointer;

  &:hover{
    background-color: white;
    color:  black;
    border-color: red;

  }
`;


export const Imput = styled.input`
  border: 1px solid #058ecd;
	box-sizing: border-box;
	font-family: Arial;
	font-size: 14px;
	line-height: 1.5;
	padding: 1em;
  width: 100%;
  height: 10%;
  border-color: black;
	resize: none;
	&:focus { outline: none; }

`;

 
