import React from 'react';
import Footer from '../components/footer';
import Navbar from "../components/Navbar";
import SideCliente from "../components/sideBarCliente/sideBarCliente";
import '../css/stylesEditarCliente.css';
const modificar = () => {
    return (
        <body>
            <div className="titulo">
                componentWillmount(){
                    document.title = "Modificar/Cliente | FDEL"
                }
            </div>
            <Navbar />
            <div className="contenedorEditar">
                <SideCliente />
                <div className="formEditar">
                    <div className="indicaciones">
                        <h4>Nombre: </h4>
                        <h4>Apellidos: </h4>
                        <h4>Correo Electronico: </h4>
                        <h4>Telefono: </h4>
                        <h4>Edad: </h4>
                        <h4>Clave: </h4>
                    </div>
                    <div className="entradasEditables">
                        <input className="cajaNombre"></input>
                        <input className="cajaApellidos"></input>
                        <input className="cajaCorreo" type="email"></input>
                        <input className="cajaTelefono" type="number"></input>
                        <input className="cajaEdad" type="number"></input>
                        <input className="cajaContrasenia" type="password" placeholder="Ingrese su contraseña"></input>
                    </div>
                    <div className="cajaBoton">
                        <button className="botonConfirmar">
                            Confirmar
                    </button>
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

export default modificar;