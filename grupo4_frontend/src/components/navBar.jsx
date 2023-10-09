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
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse">
        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
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
          <form className="d-flex" role="search">
            <input
              type="search"
              className="form-control me-2"
              placeholder="Search"
              value={searchValue}
              onChange={handleSearchChange}
            />
            <button className="btn btn-outline-primary">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;