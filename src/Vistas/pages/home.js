import React from "react";
import "./../css/stylesHome.css";
import background_home from "../images/u0.jpg";
import image_2 from "../images/u201.jpg";
//import image_1 from "../images/u31.svg";
//import { Button } from "react-bootstrap";
import Footer from "../components/footer";

import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <body>
      <Navbar />
      {/* CONTENEDOR DEL PROFUCTO DESTACADO VISTA PRINCIPAL */}
      <div className="background">
        <div class="caja">
          <div class="box">
            <img src={background_home} alt="Cargando imagen..." />
          </div>
        </div>
        {/* contenido del producto principal destacado */}
        <div className="content_izq">
          <div className="imagen">
            <img src={image_2} alt="Cargando imagen" />
          </div>
          <div className="content_der">
            <div class="box_derecha">
              <h2 id="titulo_producto">Nueva Camiseta</h2>
            </div>
          </div>
        </div>
        {/* descripción del producto principal destacado */}
      </div>

      <div>
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
      </div>
    </body>
  );
};

export default Home;
