import React, { useState } from 'react';
import axios from 'axios';

function BlogEntryForm() {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newEntry = {
      title,
      subtitle,
      content,
    };

    // Realizar una solicitud POST al backend para crear una nueva entrada
    axios.post('/api/entries', newEntry)
      .then((response) => {
        console.log('Entrada creada:', response.data);
        // Realizar cualquier redireccionamiento o actualización de la UI necesarios
      })
      .catch((error) => {
        console.error('Error al crear la entrada:', error);
        // Manejar errores
      });
  };

  return (
    <div>
      <h1>Crear Nueva Entrada de Blog</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Subtítulo o Descripción:</label>
          <input type="text" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
        </div>
        <div>
          <label>Contenido:</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
        <button type="submit">Publicar Entrada</button>
      </form>
    </div>
  );
}

export default BlogEntryForm;
