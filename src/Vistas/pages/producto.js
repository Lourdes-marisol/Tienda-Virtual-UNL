import React from 'react';
import Footer from '../components/footer'
import '../css/stylesProducto.css';
import Navbar from "../components/Navbar";
const Productos = () => {
    return (
        <body>
            <div className="titulo">
                componentWillmount(){
                    document.title = "Producto | FDEL"
                }
            </div>


            <Navbar />
            <div>
                <div className="container">
                    <div className="Producto">
                    </div>
                    <div className="Detalles">
                        <h4>Enterizo corto con hebilla HyO</h4>
                        <h6 className="calificar">Calificar</h6>
                        <h6 className="precio">Precio</h6>
                        <div className="conDescripcion">
                            <h5 className="codigoP"> Codigo producto</h5>
                            <p className="descripcion">
                                Descripcion del producto
                </p>
                            <h6 className="tColor">Color:</h6>
                            <select className="boxColor">
                                <option>
                                    Seleccione:
                    </option>
                                <option>
                                    Negro
                    </option>
                                <option>
                                    Cafe
                    </option>
                                <option>
                                    Gris
                    </option>
                            </select>

                            <h6 className="tTalla">Talla:</h6>
                            <select className="boxTalla">
                                <option>
                                    Seleccione:
                    </option>
                                <option>
                                    S
                    </option>
                                <option>
                                    M
                    </option>
                                <option>
                                    L
                    </option>
                            </select>
                            <h6 className="tCantidad">Cantidad:</h6>
                            <select className="boxCantidad">
                                <option>
                                    Seleccione:
                    </option>
                                <option>
                                    1
                    </option>
                                <option>
                                    2
                    </option>
                                <option>
                                    3
                    </option>
                                <option>
                                    4
                    </option>
                            </select>

                        </div>
                        <button className="btnCarrito" >
                            Agregar al carrito
                </button>
                        <div className="comentario">
                            <textarea>

                            </textarea>
                            <button className="enviar">
                                Enviar
                            </button>
                        </div>
                    </div>
                </div>
                <h3>Te recomendamos:</h3>
                <div className="container2">
                    <div className="recomendado1"> </div>
                    <div className="recomendado2"></div>
                    <div className="recomendado3"></div>
                    <div className="recomendado4"></div>
                    <div className="recomendado5"></div>
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
            </div>
        </body>
    );
};

export default Productos;