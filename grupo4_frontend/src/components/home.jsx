import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ArticleGrid from './article_grid';
import Footer from './footer/footer';
import { Link } from 'react-router-dom';

function Home() {
  // Lógica para cargar y mostrar noticias principales

  return (
    <div className='col-10'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className="d-flex justify-content-evenly mt-5">
              
                <p>Texto del primer párrafo.</p>
                <p>Texto del segundo párrafo.</p>
            </div>
          </div>
          <div className="col-12">
            <div className="mt-4 mb-4">
              <div className='d-flex justify-content-between'>
              <h2>Lo que está pasando</h2>
              <Link to="/crearArticulo">Crear entrada nueva</Link>
              </div>
              <div className='row'>
              <ArticleGrid />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      <Footer/>
    </div>

  );
}

export default Home;