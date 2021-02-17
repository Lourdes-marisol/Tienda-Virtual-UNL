import React from 'react';
import Footer from '../components/footer'
import '../css/stylesSecciones.css';
import Navbar from "../components/Navbar";
const Hombres = () => {
    return (
        <body>
            <div className="titulo">
                componentWillmount(){
                    document.title = "Hombres | FDEL"
                }
            </div>

            <Navbar />
            <div>
                <div className="animacion">HOMBRES</div>
                <div className="contenedorHombre">
                    <div className="productoId1">
                        <div className="detallesProducto1">
                        </div>
                    </div>
                    <div className="productoId2">
                        <div className="detallesProducto2">
                        </div>
                    </div>
                    <div className="productoId3">
                        <div className="detallesProducto3">
                        </div>
                    </div>
                    <div className="productoId4">
                        <div className="detallesProducto4">
                        </div>
                    </div>
                    <div className="productoId5">
                        <div className="detallesProducto5">
                        </div>
                    </div>
                    <div className="productoId6">
                        <div className="detallesProducto6">
                        </div>
                    </div>
                    <div className="productoId7">
                        <div className="detallesProducto7">
                        </div>
                    </div>
                    <div className="productoId8">
                        <div className="detallesProducto8">
                        </div>
                    </div>
                    <div className="productoId9">
                        <div className="detallesProducto10">
                        </div>
                    </div>
                    <div className="productoId10">
                        <div className="detallesProducto10">
                        </div>
                    </div>
                    <div className="productoId11">
                        <div className="detallesProducto11">
                        </div>
                    </div>
                    <div className="productoId12">
                        <div className="detallesProducto12">
                        </div>
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

export default Hombres;
