import React from 'react'
import Footer from '../components/footer'
import '../../Vistas/Estilos/stylesCarrito.css'
const Carrito = () => {
    return (
        <div>
            <body>
                <div className="flex-container">
                    <div className="flex-item-productos">
                    </div>
                    <div className="flex-item-detalles">
                    </div>
                    <div className="flex-item-verMas">
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