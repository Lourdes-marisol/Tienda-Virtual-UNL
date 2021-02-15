import React, { Fragment, useState } from "react";
import "./../css/Login.css";
import { Button } from "react-bootstrap";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
const Login = () => {
  const [datos, setDatos] = useState({
    correo: "",
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
      <div>
        <Fragment>
          <h1>Ingresar</h1>
          <form className="row" onSubmit={enviarDatos}>
            {/* <div id="u13">
              <img id="u13_img" class="img " src="" alt="some value" />
              <div
                id="u13_text"
                class="text "
                style={{ display: "none", visibility: "hidden" }}
              >
                <p></p>
              </div>
            </div> */}
            <div className="col-md-3">
              <input
                placeholder="Correo Electrónico"
                className="form-control"
                type="email"
                name="correo"
                onChange={handleInputChange}
              ></input>
            </div>
            <div className="col-md-3">
              <input
                placeholder="Contraseña"
                className="form-control"
                type="password"
                name="clave"
                onChange={handleInputChange}
              ></input>
            </div>

            <div className="col-md-3">
              <Button className="button" type="submit">
                Ingresar
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
export default Login;
