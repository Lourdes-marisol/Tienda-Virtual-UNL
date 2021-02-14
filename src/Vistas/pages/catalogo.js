import React from 'react';
import Footer from '../components/footer';
import {Link} from 'react-router-dom';
import '../css/stylesCatalogo.css';
import Navbar from "../components/Navbar";
import CatalogoHombre from '../images/imgCatalogo/catalogoHombres.jpg';
import CatalogoMujer from '../images/imgCatalogo/catalogoMujeres.jpg';

const Catalogo = () => {
    return (
        <body>
            <Navbar/>
            <div>
                <div className="contenedorCatalogo">
                    <div className="conHombres">
                        <img src={CatalogoHombre} alt=""></img>
                        <Link className="textHombres" to="/hombres">HOMBRES</Link>
                    </div>
                    <div className="conMujeres">
                    <img src={CatalogoMujer} alt=""></img>
                    <Link className="textMujeres" to="/mujeres">MUJERES</Link>
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

export default Catalogo;