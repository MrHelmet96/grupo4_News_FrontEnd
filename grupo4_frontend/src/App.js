import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavVertical from './components/navBar/nav_vertical';
import Home from '../src/components/home';
import HomeAdmin from './components/home_admin';
// import Category from '../src/components/category'; // Componente para mostrar noticias de una categoría específica
import Article from './components/article';
import CreateArticle from './components/article_manipulation/article_create';
import { ToastContainer } from 'react-toastify';
import UserPanel from './userPanel/userpanel';
import  {PublicHome } from './components/PublicHome';
import UsersEdit from './userPanel/userpanel_edit';
import UserPanelDos from './userPanel/userPanel2';
import Sidenavbar from './components/navBar/sidebar';


function App() {

  
  return (
    <Router>
      <div className="container bg-light" style={{ width: '80vw'}}>
        <div className='row'>
        <NavVertical/>
        <Routes>
          <Route path="/" element={<PublicHome />} />            
          <Route path="/sidebar" element={<Sidenavbar />} />            s
          <Route path="/home" element={<Home />} />     
          <Route path="/admin" element={<HomeAdmin />} />            
          <Route path="/panel/users/edit/:user_id" element={<UsersEdit />} />           
          <Route path="/panel/users" element={<UserPanelDos />} />           
          <Route path="/panel" element={<UserPanel />} />           
          <Route path="/articulo/:id" element={<Article />} />
          <Route path="/crearArticulo" element={<CreateArticle />} />
          <Route path="/crearArticulo/:article_id" element={<CreateArticle />} />
        </Routes>
        </div>        
      </div>
      <ToastContainer/>
    </Router>
  );
}
export default App;
