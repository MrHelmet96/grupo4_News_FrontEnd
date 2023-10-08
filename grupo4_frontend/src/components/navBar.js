import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link para manejar las rutas
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';

function NavBar() {
  // Estado para el valor de búsqueda
  const [searchValue, setSearchValue] = useState('');

  // Manejar cambios en el campo de búsqueda
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/sports">Sports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/health">Health</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/gastronomy">Gastronomy</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/entertainment">Entertainment</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/politics">Politics & Economy</Link>
            </li>
          </ul>
          <div className="search-bar ml-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              value={searchValue}
              onChange={handleSearchChange}
            />
            <button className="btn btn-outline-primary">Search</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;