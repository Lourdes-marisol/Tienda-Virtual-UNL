import Reac from 'react';
import Flecha from '../../images/flecha-correcta.svg';
import CP1 from '../../images/imgCarrusel/cp1.jpg';
import CP2 from '../../images/imgCarrusel/cp2.jpg';
import CP3 from '../../images/imgCarrusel/cp3.jpg';
import '../../components/carrusel/stylesCarrusel.css'
const carrusel =()=>{
    return(
        <div>
            <div className="contenedorCarrusel">
               <img className="anterior" src={Flecha} alt="" width="35"></img> 
               <img className="cp1" src={CP2} alt="" width="200"></img> 
               <img className="cp2" src={CP1} alt="" width="200"></img> 
               <img className="cp3" src={CP3} alt="" width="200"></img> 
               <img className="cp4" src={CP2} alt="" width="200"></img> 
               <img className="adelante" src={Flecha} alt="" width="35"></img> 
            </div>
        </div>
    )
} 

export default carrusel