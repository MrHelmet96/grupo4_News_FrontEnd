import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

function Header() {
  return (
    <header className="navbar navbar-dark bg-dark col-md-10 col-lg-10">
      <div className="container">
        <Link className="navbar-brand" to="/">Grupo 4 News</Link>
        <div className="header-buttons">
          <Link className="btn btn-outline-primary" to="/login">Iniciar Sesión</Link>
          <Link className="btn btn-primary" to="/register">Registrarse</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
