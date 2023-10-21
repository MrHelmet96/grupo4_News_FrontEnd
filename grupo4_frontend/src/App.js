import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavVertical from './components/navBar/nav_vertical';
import Home from '../src/components/home';
// import Category from '../src/components/category'; // Componente para mostrar noticias de una categoría específica
import Article from './components/article';
import CreateArticle from './components/article_manipulation/article_create';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <Router>
      <div className="container bg-light" style={{ width: '80vw'}}>
        <div className='row'>
        <NavVertical/>
        <Routes>
          <Route path="/" element={<Home />} />            
          <Route path="/articulo/:id" element={<Article />} />
          {/* <Route path="/crearArticulo" element={<BlogEntryForm />} /> */}
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
