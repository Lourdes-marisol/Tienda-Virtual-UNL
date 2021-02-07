import React, {Fragment, useState} from 'react';

const Login =() =>{
    const [datos, setDatos]= useState({
        correo:'',
        clave:''
    })

    const handleInputChange =(event)=>{
        //console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos=(event) =>{
        event.preventDefault();
        console.log(datos.nombres+'')
    }
    
    return(
        <Fragment>
            <h1>Ingresar</h1>
            <form className="row" onSubmit={enviarDatos}>
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
                <button className="btn-btn-primary" type="submit">Ingresar</button>
                </div>
                
            </form>
        </Fragment>

    );
}
export default Login;