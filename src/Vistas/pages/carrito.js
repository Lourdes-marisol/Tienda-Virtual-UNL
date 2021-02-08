import React from 'react'
import Footer from '../components/footer'
import '../../Vistas/Estilos/stylesCarrito.css'
const Carrito = () => {
    return (
        <div>
            <body>
                <div className="flex-container">
                    <div className="flex-item-productos">
                        <div className="productos">
                        </div>
                    </div>
                    <div className="flex-item-detalles">
                        <div className="detalles">
                            <h6>Nombre del produto</h6>
                            <h6>Precio</h6>
                            <p>
                                La descrpcion de este producto va aquí
                            </p>
                            <div>
                                <a href=""> Eliminar</a><br></br>
                                <a href=""> Guardar mas tarde</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex-item-verMas">

                        <h6>Total</h6>
                        <button>
                            Proceder con la compra
                    </button>
                    </div>
                </div>
                <h3>Los clientes tambien compraron:</h3>
                <div className="flex-containerCompraron">
                    <div className="producto1">
                    </div>
                    <div className="producto2">
                    </div>
                    <div className="producto3">
                    </div>
                    <div className="producto4">
                    </div>
                </div>
            </body>
            <footer>
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
            </footer>

        </div>

    );
};

export default Carrito;