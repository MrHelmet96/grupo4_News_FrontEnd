import React, { useState } from 'react';

function BlogEntryForm() {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [category, setCategory] = useState(''); // Opciones del menú dropdown
  const [content, setContent] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubtitleChange = (event) => {
    setSubtitle(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes enviar los datos del formulario al servidor o realizar otras acciones necesarias
    console.log('Título:', title);
    console.log('Subtítulo:', subtitle);
    console.log('Categoría:', category);
    console.log('Contenido:', content);
  };

  return (
    <div>
      <h2>Crear Nueva Entrada de Blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input type="text" value={title} onChange={handleTitleChange} />
        </div>
        <div>
          <label>Subtítulo o Descripción:</label>
          <input type="text" value={subtitle} onChange={handleSubtitleChange} />
        </div>
        <div>
          <label>Categoría:</label>
          <select value={category} onChange={handleCategoryChange}>
            <option value="sports">Sports</option>
            <option value="health">Health</option>
            <option value="entertainment">Entertainment</option>
            <option value="gastronomy">Gastronomy</option>
            <option value="economy & politics">Economía & Política</option>
          </select>
        </div>
        <div>
          <label>Contenido:</label>
          <textarea value={content} onChange={handleContentChange} />
        </div>
        <button type="submit">Publicar Entrada</button>
      </form>
    </div>
  );
}

export default BlogEntryForm;
