import React from "react";
import "./App.css";
import Navbar from "../src/Vistas/components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../src/Vistas/pages/home";
import Hombres from "../src/Vistas/pages/hombres";
import Informacion from "../src/Vistas/pages/informacion";
import Mujeres from "../src/Vistas/pages/mujeres";
import Novedades from "../src/Vistas/pages/novedades";
import Catalogo from "../src/Vistas/pages/catalogo";
import Accesorios from "../src/Vistas/pages/accesorios";
import Micuenta from "../src/Vistas/pages/micuenta";
import Registro from "../src/Vistas/pages/Registro";
import Login from "../src/Vistas/pages/Login";
import InicioSesion from "../src/Vistas/pages/iniciarSesion";
import Productos from "../src/Vistas/pages/producto";
import Carrito from "../src/Vistas/pages/carrito";


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/Home" exact component={Home} />
        <Route path="/hombres" exact component={Hombres} />
        <Route path="/mujeres" exact component={Mujeres} />
        <Route path="/novedades" exact component={Novedades} />
        <Route path="/informacion" exact component={Informacion} />
        <Route path="/catalogo" exact component={Catalogo} />
        <Route path="/accesorios" exact component={Accesorios} />
        <Route path="/micuenta" exact component={Micuenta} />
        <Route path="/Login" exact component={Login} />
        <Route path="/Registro" exact component={Registro} />
        <Route path="/iniciarSesion" exact component={InicioSesion} />
        <Route path="/producto" exact component={Productos} />
        <Route path="/carrito" exact component={Carrito} />

      </Switch>
    </Router>
  );
}

export default App;
