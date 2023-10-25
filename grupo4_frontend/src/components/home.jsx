import React from "react";
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import ArticleGrid from "./article_grid";
// import Footer from './footer/footer';

function Home() {
  // Lógica para cargar y mostrar noticias principales

  const navigate = useNavigate();
  const handleNavegacion = () => {
    navigate('/admin');
  };
  

  return (
    <div className="col-md-10 col-lg-10">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-12 border-bottom border-dark border-2">
            <div className="d-flex justify-content-evenly mt-5">
              <p className="col-md-4 col-lg-4">
                Bienvenid@ a la web de noticias internas de Silicon Misiones, un
                espacio de intercambio de información para mantenerte
                actualizad@{" "}
              </p>
              {/* <p className='col-md-4 col-lg-4'>Este es un espacio de intercambio de información para mantenerte actualizad@ </p> */}
            </div>
          </div>
          <div className="col-md-12 col-lg-12">
            <div className="">
              <div className="d-flex justify-content-between border-bottom border-dark border-2 py-1">
                <h2>Lo que está pasando</h2>
              </div>

              <div className="d-flex flex-column justify-content-evenly">
                <button onClick={handleNavegacion} className="btn btn-primary">
                  publicar noticia
                </button>
              </div>

              <div className="row">
                <ArticleGrid />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Footer/> */}
    </div>
  );
}

export default Home;
