import React from 'react';
import imagen1 from './images/imagen_noticia1.jpg'
import 'bootstrap/dist/css/bootstrap.css';

function Home() {
  // Lógica para cargar y mostrar noticias principales

  return (
    <div className='container '>
      <h2>Lo que está pasando</h2>
      <div className="row justify-content-center">
        <div className="col-lg-9">
          <img src={imagen1} />
          <h2>Título de la Noticia</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie enim sed tincidunt ornare. Proin vehicula turpis a odio euismod, id venenatis augue molestie. Etiam ultrices ante et pulvinar aliquet.<a href="#">... Leer más</a></p>
        </div>
      </div>
      <div className="row justify-content-around news_container">
        <div className='col-lg-3'>
          <img src={imagen1} className='img-thumbnail' alt="Imagen de la noticia"/>
          <h2>Título de la Noticia</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie enim sed tincidunt ornare. Proin vehicula turpis a odio euismod, id venenatis augue molestie. Etiam ultrices ante et pulvinar aliquet.<a href="#">... Leer más</a></p>
        </div>
        <div className='col-lg-3'>
          <img src={imagen1} className='img-thumbnail' alt="Imagen de la noticia"/>
          <h2>Título de la Noticia</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie enim sed tincidunt ornare. Proin vehicula turpis a odio euismod, id venenatis augue molestie. Etiam ultrices ante et pulvinar aliquet.<a href="#">... Leer más</a></p>
        </div>
        <div className='col-lg-3'>
          <img src={imagen1} className='img-thumbnail' alt="Imagen de la noticia"/>
          <h2>Título de la Noticia</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie enim sed tincidunt ornare. Proin vehicula turpis a odio euismod, id venenatis augue molestie. Etiam ultrices ante et pulvinar aliquet.<a href="#">... Leer más</a></p>
        </div>
      </div>
      <div className="row justify-content-around">
        <div className="col-lg-5">
          <img src={imagen1} className='img-thumbnail' alt="Imagen de la noticia"/>
          <h2>Título de la Noticia</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie enim sed tincidunt ornare. Proin vehicula turpis a odio euismod, id venenatis augue molestie. Etiam ultrices ante et pulvinar aliquet.<a href="#">... Leer más</a></p>
        </div>
        <div className="col-lg-5">
          <img src={imagen1} className='img-thumbnail' alt="Imagen de la noticia"/>
          <h2>Título de la Noticia</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie enim sed tincidunt ornare. Proin vehicula turpis a odio euismod, id venenatis augue molestie. Etiam ultrices ante et pulvinar aliquet.<a href="#">... Leer más</a></p>
        </div>
      </div>
      <div className="row justify-content-around news_container">
        <div className='col-lg-3'>
          <img src={imagen1} className='img-thumbnail' alt="Imagen de la noticia"/>
          <h2>Título de la Noticia</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie enim sed tincidunt ornare. Proin vehicula turpis a odio euismod, id venenatis augue molestie. Etiam ultrices ante et pulvinar aliquet.<a href="#">... Leer más</a></p>
        </div>
        <div className='col-lg-3'>
          <img src={imagen1} className='img-thumbnail' alt="Imagen de la noticia"/>
          <h2>Título de la Noticia</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie enim sed tincidunt ornare. Proin vehicula turpis a odio euismod, id venenatis augue molestie. Etiam ultrices ante et pulvinar aliquet.<a href="#">... Leer más</a></p>
        </div>
        <div className='col-lg-3'>
          <img src={imagen1} className='img-thumbnail' alt="Imagen de la noticia"/>
          <h2>Título de la Noticia</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie enim sed tincidunt ornare. Proin vehicula turpis a odio euismod, id venenatis augue molestie. Etiam ultrices ante et pulvinar aliquet.<a href="#">... Leer más</a></p>
        </div>
      </div>


    </div>

  );
}

export default Home;