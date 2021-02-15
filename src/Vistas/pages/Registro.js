import React, { Fragment, useState } from "react";
import { Button } from "react-bootstrap";
import Footer from "../components/footer";
import "./../css/Registro.css";
import Navbar from "../components/Navbar";
const Registro = () => {
  const [datos, setDatos] = useState({
    nombres: "",
    correo: "",
    telefono: "",
    edad: "",
    clave: "",
  });

  const handleInputChange = (event) => {
    //console.log(event.target.value)
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    console.log(datos.nombres + "");
  };

  return (
    <body>
      <Navbar />
      <div className="contenedor_registro">
        <Fragment>
          <h1 id="titulo_formulario">Formulario</h1>
          <form className="row" onSubmit={enviarDatos}>
            <div className="col-md-3">
              <p id="titles">Ingrese sus nombres completos</p>
              <input
                className="form-control"
                type="text"
                name="nombres"
                onChange={handleInputChange}
              ></input>
            </div>
            <div className="col-md-3">
              <p id="titles">Ingrese su correo</p>
              <input
                className="form-control"
                type="email"
                name="correo"
                onChange={handleInputChange}
              ></input>
            </div>
            <div className="col-md-3">
              <p id="titles">Ingrese su telefono</p>
              <input
                className="form-control"
                type="text"
                name="telefono"
                onChange={handleInputChange}
              ></input>
            </div>
            <div className="col-md-3">
              <p id="titles">Ingrese su contraseña</p>
              <input
                className="form-control"
                type="password"
                name="clave"
                onChange={handleInputChange}
              ></input>
            </div>

            <div className="col-md-3">
              <p id="titles">Ingrese su edad</p>
              <input
                className="form-control"
                type="text"
                name="edad"
                onChange={handleInputChange}
              ></input>
            </div>

            <div className="col-md-3">
              <Button className="button" type="submit">
                Registrar
              </Button>
            </div>
          </form>
        </Fragment>
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
export default Registro;
