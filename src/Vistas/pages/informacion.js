import React from 'react';
import Footer from '../components/footer'
import '../../Vistas/Estilos/stylesInformacion.css'
const Informacion = () => {
    return (
        <body>
           <div className="img">

           </div>
            <div className="App">
                <h2>Quienes somos?</h2>
                <p>
                    Somos una tienda en linea para aquellos usuarios que buscan una manera mas sencilla de realizar sus compras en linea de una manera mas segura.
                    Estamos comprometidos a brindar el mejor servicio para nuestros clientes en linea,ofrecer el mejor servicio y los mejores articulos y ropa de
                    moda de su marca preferida y sus componentes como accesorios personales calzado etc..Nuestros articulos cuentan con la mejor calidad y un precio justo.<br>
                    </br>
                    GRACIAS POR SU VISITA.
                </p>
                <h2>Mision</h2>
                <p>
                    Lograr que nuestra plataforma sea líder mundial en el comercio electrónico, brindado a clientes y usuarios seguridad, facilidad y rapidez en el momento de efectuar compras.
                    Generar fuentes de empleos creando la red de mercadeo mas grande del mundo, dando oportunidad a miles de personas que de acuerdo a su capacidad y esfuerzo pueda lograr obtener
                    grandes ingresos en tiempo récord.Como parte de la visión mas importante tenemos el desarrollo de obras sociales a través del movimiento de DIOS, Luz en la Oscuridad llevando
                    así ayuda a las personas mas necesitadas, por medio de alimentos, ropa y conocimiento.
                </p>
                <h2>Vision</h2>
                <p>
                    Ofrecer a todo el mundo vender mas y pagar menos, con la mayor calidad posible y al menor precio,
                    de esa manera lograr que nuestros servicios lleguen a todo tipo de publico, desde una persona particular
                    que desea vender un producto desde su casa, hasta una gran empresa que desea vender miles de productos,
                    facilitando a todos un manejo fácil, donde no necesita ser un web máster para manejar su negocio online,
                    al contrario convertir el manejo en algo divertido, que lo podrá hacer desde una PC, tablet o celular.
                </p>
                <h2>Objetivos</h2>
                <p>
                    <b>Servicio</b> :Como funcionarios nos entregamos diligentemente y nos esforzamos para siempre útil a los demás, a dar oportuna y esmeradamente atención a los requerimientos de nuestros clientes y a satisfacer las necesidades de la organización.<br></br>
                    <b>Respeto</b>: Tenemos una actitud de comprensión del ser de los demás y nos comportamos con cordura y tolerancia en las situaciones que se nos presentan.<br></br>
                    <b>Compromiso</b>:Cumplimos con las obligaciones contraídas, con la palabra dada, con la fe empeñada y respondemos por los servicios ofrecidos.<br></br>
                    <b>Honestidad</b>: Observamos normas y compromisos, actuamos con la verdad y somos consecuentes con lo que hacemos, lo que pensamos y lo que decimos.<br></br>
                    <b>Trabajo en equipo</b>: Unimos los talentos individuales y esfuerzos personales para el logro de los objetivos organizacionales.<br></br>
                    <b>Responsabilidad</b>: Cumplimos con las obligaciones adquiridas con nuestros clientes, con nuestros trabajadores y con la sociedad. Vamos más allá de la obligación y asumimos las consecuencias de nuestros actos y decisiones.<br></br>
                </p>
                <div>

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

export default Informacion;
