import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NuevaCuenta = () => {

    const [ usuario, guardarUsuario ] = useState({
        nombre:'',
        email: '',
        password: '',
        confirmar: ''
    });

    const { nombre, email, password, confirmar } = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        });
    }

    // Cuando el usuario quiere iniciar sesion
    const onSubmit = (e) => {
        e.preventDefault();

        // Validar los campos

        // Password minimo de 6 caracteres

        // Validar que los dos password sean iguales

        // Pasar al action

    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1> Obtener una cuenta </h1>
                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            type="text" 
                            id="nombre" 
                            name="nombre" 
                            value={nombre}
                            placeholder="Tu Nombre"
                            onChange={onChange} />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={email}
                            placeholder="Tu Email"
                            onChange={onChange} />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Contraseña</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            value={password}
                            placeholder="Tu Contraseña"
                            onChange={onChange} />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar Contraseña</label>
                        <input 
                            type="password" 
                            name="confirmar" 
                            id="confirmar" 
                            value={confirmar}
                            placeholder="Repite tu contraseña"
                            onChange={onChange} />
                    </div>
                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Registrarme" />
                    </div>
                </form>
                <Link to={'/'} className="enlace-cuenta">
                    Volver a Iniciar Sesión
                </Link>
            </div>
        </div>
    );
}

export default NuevaCuenta;