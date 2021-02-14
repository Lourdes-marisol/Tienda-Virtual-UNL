import React from 'react';
import { Alert } from 'react-bootstrap';
import Footer from '../components/footer';
import "./../css/stylesCarrito.css";
import Navbar from "../components/Navbar";
const Carrito = () => {
    return (
        <body>
            <Navbar/>
            <div>
                <div className="contenedorC">
                    <div className="productosC">
                        <div className="producto1">

                        </div>
                        <div className="producto2">

                        </div>
                        <div className="producto3">

                        </div>
                    </div>
                    <div className="detallesC">
                        <div className="detalles1">
                            <h3>Nombre del producto</h3>
                            <h5 className="textCantidad">Cantidad</h5>
                            <div className="precio">
                                <h5>Precio</h5>
                                <h5> $ 200.0</h5>
                            </div>
                            
                            <div className="eliminar">
                                <a href={Alert}>Eliminar</a>
                            </div>
                            <div className="guardar">
                                <a href={Alert}>Guardar para mas tarde</a>
                            </div>
                            <select className="boxCantidadC">
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
                            </select>
                        </div>
                        <div className="detalles2">

                        </div>
                        <div className="detalles3">

                        </div>
                    </div>
                    <div className="verMas">
                        <div className="total">
                            <h4>Subtotal</h4>
                            <h4>$ 200.0 </h4>
                            <button className="comprar">
                                Proceder con el pago
                        </button>
                        </div>
                        <div className="otros">

                        </div>
                    </div>
                </div>
                <h3>Los usuarios tambien compraron:</h3>
                <div className="container2">
                    <div className="recomendado1"> </div>
                    <div className="recomendado2"></div>
                    <div className="recomendado3"></div>
                    <div className="recomendado4"></div>
                    <div className="recomendado5"></div>
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
export default Carrito;