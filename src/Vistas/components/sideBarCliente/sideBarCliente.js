import './stylesSiderCliente.css';
import CuentaIcon from '../../images/usuario.svg';
import { Link } from 'react-router-dom';
import Editar from '../../images/iconSiderCliente/editar.svg';
import Envio from '../../images/iconSiderCliente/camion.svg';
import Historial from '../../images/iconSiderCliente/historial.svg';
import Borrar from '../../images/iconSiderCliente/borrar.svg';
const sideBarCliente = () => {
    return (
            <div className="contenedorCuenta">
                <Link className="cuentaI">
                    <img src={CuentaIcon} alt="" width="120" />;
            </Link>
                <div className="slideBarCuenta">
                    <Link className="editarLogo">
                        <img src={Editar} alt="" width="35" />
                    </Link>

                    
                    <Link className="enviarLogo">
                        <img src={Envio} alt="" width="35" />
                    </Link>
                    

                    <Link className="historialLogo">
                        <img src={Historial} alt="" width="35" />
                    </Link>


                    <Link className="borrarLogo">
                        <img src={Borrar} alt="" width="35" />
                    </Link>

                    <div className="menu">
                        <div className="m">
                        <h3>Modificar Datos</h3>
                        </div>
                        <div className="s">
                        <h3>Seguimiento de envío</h3>
                        </div>
                        <div className="h">
                        <h3>Historial de Compra</h3>
                        </div>
                        <div className="d">
                        <h3>Dar de baja la Cuenta</h3>
                        </div>
                    </div>
                    </div>
            </div>
    )
}

export default sideBarCliente;