import React from 'react';
import Footer from '../components/footer';
import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <body>
      <Navbar/>
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

export default Home;