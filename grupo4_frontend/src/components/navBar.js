import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link para manejar las rutas

function NavBar() {
  // Estado para el valor de búsqueda
  const [searchValue, setSearchValue] = useState('');

  // Manejar cambios en el campo de búsqueda
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <nav>
      <ul className="nav-list">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/categoria/deportes">Deportes</Link></li>
        <li><Link to="/categoria/salud">Salud</Link></li>
        <li><Link to="/categoria/gastronomia">Gastronomía</Link></li>
        <li><Link to="/categoria/entretenimiento">Entretenimiento</Link></li>
        <li><Link to="/categoria/economia-y-politica">Economía y Política</Link></li>
      </ul>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar noticias"
          value={searchValue}
          onChange={handleSearchChange}
        />
        <button>Buscar</button>
      </div>
    </nav>
  );
}

export default NavBar;