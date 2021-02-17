import React from "react";
import "./../css/stylesHome.css";
import background_home from "../images/u0.jpg";
import image_2 from "../images/u201.jpg";
import Footer from "../components/footer";
import color_1 from "../images/imgCatalogo/bralette_rojo.jpg";
import color_2 from "../images/imgCatalogo/bralette_rosado.jpg";

import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <body>
      <div className="titulo">
        componentWillmount(){(document.title = "Inicio | FDEL")}
      </div>
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
              <h2 id="titulo_producto">Nuevo Bralette 2021</h2>
              <p>
                Deja que la elegancia hable por ti, con la nueva colección de
                camisas MAO 2020, un diseño formidable, elegante y cómodo.
                Elaborada en 100% fibras de algodón, lo que te garantiza una
                mejor calidad y resitencia de los materiales.
              </p>
              <p>
                Disfruta de este modelo Slim Fit, que te permite vestirte en lo
                último en cuanto a moda se refiere.
              </p>
              <p id="p1">Colores disponibles</p>

              {/* COLOR PRODUCTO 1 */}
              <div className="cont_color1">
                <img src={color_1} alt="" />
              </div>
              {/* COLOR PRODUCTO 2 */}
              <div className="cont_color2">
                <img src={color_2} alt="" />
              </div>
              <h4 class="precio_texto">Precio de OFERTA</h4>
              <p className="precio_producto">$ 14,99</p>
            </div>
          </div>
        </div>
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
