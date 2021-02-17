import React from "react";
import Footer from "../components/footer";
import LogoTienda from "../images/tienda.svg";
import LogoEmail from "../images/correo.svg";
import LogoClave from "../images/candado.svg";
import Navbar from "../components/Navbar";
import "./../css/stylesSesion.css";

const InicioSesion = () => {
  return (
    <body>
      <div className="titulo">
        componentWillmount(){
          document.title = "Iniciar Sesion | FDEL"
        }
      </div>
      <Navbar />
      <div className="contenedor">
        <h3 className="text"> Ingresar</h3>
        <div className="logo">
          <img src={LogoTienda} alt="" width="35" />
        </div>
        <div className="form">
          <div className="correo">
            <h4 className="infoCorreo"> Correo Electronico:</h4>
            <img src={LogoEmail} alt="" width="25" />
          </div>
          <input
            className="txtCorreo"
            type="email"
            placeholder="Ingrese su correo electronico"
          ></input>
          <br></br>
          <div className="clave">
            <h4 className="infoClave"> Contraseña:</h4>
            <br></br>
            <img src={LogoClave} alt="" width="25" />
          </div>
          <input
            className="txtClave"
            type="password"
            placeholder="Ingrese su contraseña"
          ></input>
          <div className="boton">
            <button className="ingresar">Ingresar</button>
            <br></br>
            <h6 className="texto">No estas registrado? Registrate!</h6>
            <br></br>
            <h6 className="texto">Olvidaste la contraseña</h6>
          </div>
        </div>
      </div>
      <Footer>
        <Footer.Wrapper>
          <Footer.Row>
            <Footer.Column>
              <Footer.Title>Contactanos</Footer.Title>
              <Footer.Link href="#">FEDEL OFICIAL</Footer.Link>
              <Footer.Link href="#">FEDEL OFICIAL</Footer.Link>
              <Footer.Link href="#">@fedel</Footer.Link>
              <Footer.Link href="#">fedel@gemail.com</Footer.Link>
            </Footer.Column>
            <Footer.Column>
              <Footer.Title>Empresa</Footer.Title>
              <Footer.Link href="#">Quienes Somos</Footer.Link>
              <Footer.Link href="#">Mision y Vision</Footer.Link>
              <Footer.Link href="#">Nuesytos Clientes</Footer.Link>
            </Footer.Column>
            <Footer.Column>
              <Footer.Title>Productos</Footer.Title>
              <Footer.Link href="#">Disponibidad</Footer.Link>
              <Footer.Link href="#">Devoluciones</Footer.Link>
              <Footer.Link href="#">Ventas al por Mayor</Footer.Link>
            </Footer.Column>
          </Footer.Row>
        </Footer.Wrapper>
      </Footer>
    </body>
  );
};

export default InicioSesion;
