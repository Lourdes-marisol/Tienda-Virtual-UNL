import React from "react";

import "./App.css";
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
import Modificar from "../src/Vistas/pages/ModificarDatos";
import GestionarProductos from "../src/Vistas/pages/GestionarProductos";
import Baja from "../src/Vistas/pages/darBajaCuenta";
import Seguimiento from "../src/Vistas/pages/darBajaCuenta";
import Historial from "../src/Vistas/pages/historial";
import ModificarCliente from "../src/Vistas/pages/modificarDatosCliente";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" exact component={Home} />
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
        <Route path="/ModificarDatos" exact component={Modificar} />
        <Route path="/darBajaCuenta" exact component={Baja} />
        <Route path="/historial" exact component={Historial} />
        <Route path="/seguimiento" exact component={Seguimiento} />
        <Route path="/modificarDatosCliente" exact component={ModificarCliente} />
        <Route path="/GestionarProductos" exact component={GestionarProductos} />

      </Switch>
      
    </Router>
  );
}

export default App;
