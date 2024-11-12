import React from 'react';
import './estilos.css';

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Iniciar sesión</h2>
                <input type="text" placeholder="Usuario" />
                <input type="password" placeholder="Contraseña" />
                <div className="login-options">
                    <label>
                        <input type="checkbox" /> Recuérdame
                    </label>
                    <a href="/" className="forgot-password">¿Olvidaste la contraseña?</a>
                </div>
                <button className="login-button">Iniciar sesión</button>
                <p className="register-link">
                    ¿No tienes cuenta? <a href="/">Regístrate</a>
                </p>
            </div>
        </div>
    );
};

export default Login;


