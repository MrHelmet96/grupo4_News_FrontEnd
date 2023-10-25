import React from "react";
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import ArticleGrid from "./article_grid"; // Importa el componente para mostrar noticias
import jwt_decode from 'jwt-decode';  // Importa la biblioteca para decodificar tokens JW
import {toast } from 'react-toastify'; // Importa la biblioteca para mostrar notificaciones

function Home() {
// Obtiene la función de navegación para redirigir a otras rutas
  const navigate = useNavigate();
  const handleNavegacion = () => {
    // Obtiene el token del usuario del almacenamiento de sesión
    var userRole = sessionStorage.getItem("token")
      // Decodifica el token JWT para obtener la información del usuario
       var tokenDecodificado = jwt_decode(userRole)
      // Mensajes persoanlizados según rol
       if (JSON.stringify(tokenDecodificado.rol_id)==1){    
        toast.error('Su rol no le permite acceder a esto', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });}
    
        if (JSON.stringify(tokenDecodificado.rol_id)==2){  
          navigate('/admin');      
                            } 
        if (JSON.stringify(tokenDecodificado.rol_id)==3){    
          navigate('/admin');}
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
            <div className="d-flex justify-content-center my-4">
                <button onClick={handleNavegacion} className="btn btn-secondary btn-sm">
                  publicar noticia
                </button>
              </div>

              <div className="d-flex justify-content-between border-bottom border-dark border-2 py-1">
                <h2>Lo que está pasando</h2>
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
