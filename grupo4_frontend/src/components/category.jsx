import React from 'react';

function Category(props) {
  const category = props.match.params.category; // Obtiene la categoría de la URL

  // Lógica para cargar y mostrar noticias de la categoría seleccionada

  return (
    <div>
      <h2>Noticias de la categoría: {category}</h2>
      {/* Renderizar las noticias aquí */}
    </div>
  );
}

export default Category;