import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Importa el hook useParams de react-router-dom
import { Link } from 'react-router-dom';

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

  return (
    <div className="col-10">
      <div className="row justify-content-center">
      <div className='col-md-12 col-lg-12 border-bottom border-dark border-2'>
            <div className=" mt-5">
              
            <Link to="/">
              <a href='/' className=""><i class="fa-solid fa-angles-left"></i></a>
            </Link>
            </div>
          </div>
        <div className="col-10 p-4 ">
          <div className='d-flex justify-content-between mt-5 pb-2 border-bottom border-dark border-2'>
          <h1 className=''>{article.title}</h1>
          </div>
          <h6 className='mt-3 pb-2 border-bottom border-dark border-2'>{article.subtitle}</h6>
          <div dangerouslySetInnerHTML={{__html: article.content}} className='col-9 pt-3'></div>
        </div>
      </div>
    </div>
  );
}

export default Article;
