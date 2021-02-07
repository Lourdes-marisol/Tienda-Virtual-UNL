import React, {Fragment, useState} from 'react';

const Registro =() =>{
    const [datos, setDatos]= useState({
        nombres:'',
        correo:'',
        telefono:'',
        edad:'',
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
            <h1>Formulario</h1>
            <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                <input
                    placeholder="Ingrese sus Nombres completos"
                    className="form-control"
                    type="text"
                    name="nombres"
                    onChange={handleInputChange}
                    ></input>
                </div>
                <div className="col-md-3">
                <input
                    placeholder="Ingrese su correo"
                    className="form-control"
                    type="email"
                    name="correo"
                    onChange={handleInputChange}
                    ></input>
                </div>
                <div className="col-md-3">
                <input
                    placeholder="Ingrese su telefono"
                    className="form-control"
                    type="text"
                    name="telefono"
                    onChange={handleInputChange}
                    ></input>
                </div>
                <div className="col-md-3">
                <input
                    placeholder="Ingrese su contraseña"
                    className="form-control"
                    type="password"
                    name="clave"
                    onChange={handleInputChange}
                    ></input>
                </div>

                <div className="col-md-3">
                <input
                    placeholder="Ingrese su edad"
                    className="form-control"
                    type="text"
                    name="edad"
                    onChange={handleInputChange}
                    ></input>
                </div>


                <div className="col-md-3">
                <button className="btn-btn-primary" type="submit">Registrar</button>
                </div>
                
            </form>
        </Fragment>

    );
}
export default Registro;