import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import ArticleGrid from './article_grid';
// import Footer from './footer/footer';
import { Link } from 'react-router-dom';
import ArticleGridAdmin from './article_grid_admin';

function HomeAdmin() {
  // Lógica para cargar y mostrar noticias principales

  return (
    <div className='col-md-10 col-lg-10'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 col-lg-12 border-bottom border-dark border-2'>
            <div className="d-flex justify-content-evenly mt-5">
              
                <p className='col-md-4 col-lg-4'>This is a space for developing ideas that pique my interest. My intention is to build a practice of writing, share what I'm learning in the hopes that it will benefit others and my future self.</p>
                <p className='col-md-4 col-lg-4'>If you'd like to discuss any of these notes with me or if you're generous enough to correct my thinking, please reach out on Twitter or send me an email.</p>
            </div>
          </div>
          <div className="col-md-12 col-lg-12">
            <div className="mt-4 mb-4">
              <div className='d-flex justify-content-between border-bottom border-dark border-2'>
              <h2>Lo que está pasando</h2>
              <Link to="/crearArticulo">Crear entrada nueva</Link>
              </div>
              <div className='row'>
                <ArticleGridAdmin />              
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      {/* <Footer/> */}
    </div>

  );
}

export default HomeAdmin