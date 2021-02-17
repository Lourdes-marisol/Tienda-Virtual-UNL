import React from 'react';
import Footer from '../components/footer'
import '../css/stylesInformacion.css';
import Navbar from "../components/Navbar";
import Logo from '../images/Logo sin fondo.png';

const Informacion = () => {
    return (
        <body>
            <div className="titulo">
                componentWillmount(){
                    document.title = "Informacion | FDEL"
                }
            </div>
            <title> HOLI</title>
            <Navbar />
            <div className="App">
                <div>
                    <img className="logoC" src={Logo} alt="" width="50"></img>
                </div>
                <h2>Quienes somos?</h2>
                <div className="Texto">
                    <h5 className="texto5">
                        FDEL es una empresa dedicada a la venta online de ropa. Nuestro objetivo es ofrecer la moda más actual a los mejores precios.
                        Tenemos a su disposición una gran variedad de productos, los cuales son renovados cada temporada para dar siempre las prendas
                        más trendy.Tenemos un equipo que está dedicado a satisfacer tus necesidades y que te contestará a tus dudas con la mayor brevedad posible.
                        Para una mejor comunicación puedes contactar con nosotros a través de WhatsApp o mensaje privado de Facebook y tan sólo en unos minutos
                        tu duda será resuelta.
                  </h5>
                </div>
                <h2>Mision</h2>
                <h5 className="texto5">
                    Lograr que nuestra plataforma sea líder mundial en el comercio electrónico, brindado a clientes y usuarios seguridad, facilidad y
                    rapidez en el momento de efectuar compras.Generar fuentes de empleos creando la red de mercadeo mas grande del mundo, dando oportunidad
                    a miles de personas que de acuerdo a su capacidad y esfuerzo pueda lograr obtener grandes ingresos en tiempo récord.
                    Como parte de la visión mas importante tenemos el desarrollo de obras sociales a través del movimiento de DIOS, Luz en la Oscuridad llevando
                    así ayuda a las personas mas necesitadas, por medio de alimentos, ropa y conocimiento.
                    </h5>
                <h2>Vision</h2>
                <h5 className="texto5">
                    Ofrecer a todo el mundo Tiendas Online, paginas web y estrategias de marketing de manera que su negocio Venda mas y pague menos, con la mayor
                    calidad posible y al menor precio, de esa manera lograr que nuestros servicios lleguen a todo tipo de publico, desde una persona particular que
                    desea vender un producto desde su casa, hasta una gran empresa que desea vender miles de productos, facilitando a todos un manejo fácil, donde
                    no necesita ser un web máster para manejar su negocio online, al contrario convertir el manejo en algo divertido, que lo podrá hacer desde una
                    PC, tablet o celular.
                    </h5>
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

export default Informacion;
