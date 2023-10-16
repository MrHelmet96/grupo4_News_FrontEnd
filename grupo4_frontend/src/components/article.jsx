import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Importa el hook useParams de react-router-dom

function Article() {
  const { id } = useParams(); // Obtiene el parámetro "id" de la URL
  const [article, setArticle] = useState(null);

  // Utiliza el hook useEffect para realizar una solicitud cuando el "id" cambia
  useEffect(() => {
    // Realiza una solicitud para obtener el artículo según el ID (usando "id" de useParams)
    fetch(`http://localhost:8080/articles/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setArticle(data); // Almacena los datos del artículo en el estado
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [id]); // El efecto se ejecuta cada vez que "id" cambia

  if (!article) {
    return <div>Loading...</div>; // Muestra un mensaje de carga mientras se obtiene el artículo
  }

  const paragraphs = article.content.split('\n').map((paragraph, index) => (
    <p key={index}>{paragraph}</p>
  ));

  return (
    <div className="container">
      <div className="row justify-content-center mb-5">
        <div className="col-lg-9">
          <h2 className='mt-5'>{article.title}</h2>
          <div dangerouslySetInnerHTML={{__html: article.content}} className='mt-5'></div>
          {/* <div className='m-5'>{paragraphs}</div> */}
        </div>
      </div>
    </div>
  );
}

export default Article;
