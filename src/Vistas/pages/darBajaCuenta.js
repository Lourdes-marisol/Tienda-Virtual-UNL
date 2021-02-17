import React from 'react';
import Footer from '../components/footer';
import Navbar from "../components/Navbar";
import SideCliente from "../components/sideBarCliente/sideBarCliente";
import '../css/stylesBajaCuenta.css';
const darBajaCuenta = () => {
    return (
        <body>
            <div className="titulo">
                componentWillmount(){
                    document.title = "Eliminar Cuenta | FDEL"
                }
            </div>

            <Navbar />
            <div>
                <div className="cajaPreguntas">
                    <SideCliente />
                    <div className="titulos">
                        <h3>Desactivar cuenta FDEL</h3>
                        <h3 className="textGris">Lamentamos que te vayas, Cuentanos por qué quieres dar de baja a tu cuenta</h3>
                    </div>
                    <div className="seccionPreguntas">
                        <h3 className="dC">Demasiado costoso</h3>
                        <h3 className="nI">No me interesa tener cuenta en esta tienda, la cree por error</h3>
                        <h3 className="oM">Otro motivo</h3>
                    </div>
                    <div className="cajaClave">
                        <h3>Escriba su contraseña</h3>
                        <input className="txtClaveElimina" type="password" placeholder="Ingrese su contraseña" />
                    </div>
                    <div className="seccionBotones">
                        <button className="volverTienda">Volver a la Tienda</button>
                        <button className="desactivarCuenta">Desactivar la cuenta</button>
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

export default darBajaCuenta;