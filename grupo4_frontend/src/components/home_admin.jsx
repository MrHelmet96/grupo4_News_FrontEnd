import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import Footer from './footer/footer';
import { Link, useNavigate } from 'react-router-dom';
import ArticleGridAdmin from './article_grid_admin';
import jwt_decode from 'jwt-decode';
import { toast } from 'react-toastify';

function HomeAdmin() {


  // Lógica para cargar y mostrar noticias principales

  const navigate = useNavigate();
  const handleNavegacion = () => {
    var userRole = sessionStorage.getItem("token")

    var tokenDecodificado = jwt_decode(userRole)

    if (JSON.stringify(tokenDecodificado.rol_id) == 1) {
      alert("Su rol no le permite realizar dicha acción")
    }

    if (JSON.stringify(tokenDecodificado.rol_id) == 2) {
      alert('Su rol no le permite hacer eso')
      navigate('/admin');
    }
    if (JSON.stringify(tokenDecodificado.rol_id) == 3) {
      navigate('/panel/users');
    }
  };


  return (
    <div className='col-md-10 col-lg-10'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 col-lg-12 border-bottom border-dark border-2'>
            <div className="d-flex mt-5">

              <p className='col-md-4 col-lg-4 m-auto p-3'>Bienvenid@ a la web de noticias internas de Silicon Misiones, un espacio de intercambio de información para mantenerte actualizad@</p>
              {/* <p className='col-md-4 col-lg-4'>If you'd like to discuss any of these notes with me or if you're generous enough to correct my thinking, please reach out on Twitter or send me an email.</p> */}
              <div className='ms-auto m-3'>
                <button to={'/panel/users'} onClick={handleNavegacion} className="btn btn-outline-secnodary btn-sm">Ir a panel de usuarios<i class="fa-solid fa-angles-right"> </i></button>
              </div>
            </div>
          </div>


          <div className="col-md-12 col-lg-12">
            <div className="mt-4 mb-4">
              <div className='d-flex justify-content-between border-bottom border-dark border-2'>
                <h2>Lo que está pasando</h2>
                <Link className='btn btn-secondary btn-sm mb-2' to="/crearArticulo">Crear entrada nueva</Link>
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