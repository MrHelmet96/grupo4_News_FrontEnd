import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ArticleGrid from './article_grid';

function Home() {
  // Lógica para cargar y mostrar noticias principales

  return (
    <div className='container'>
      <h2>Lo que está pasando</h2>
      <ArticleGrid />
    </div>

  );
}

export default Home;