import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ArticleGrid from './article_grid';
import Footer from './footer/footer';

function Home() {
  // Lógica para cargar y mostrar noticias principales

  return (
    <div className='col-10'>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <div className="mb-4">
                <p>Texto del primer párrafo.</p>
                <p>Texto del segundo párrafo.</p>
            </div>
          </div>
          <div className="col-6">
            <div className="mb-4">
              <h2>Lo que está pasando</h2>
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