import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavVertical from './components/navBar/nav_vertical';
import Home from '../src/components/home';
// import Category from '../src/components/category'; // Componente para mostrar noticias de una categoría específica
import Article from './components/article';
import CreateArticle from './components/article_manipulation/article_create';


function App() {
  return (
    <Router>
      <div className="container" style={{ width: '80vw'}}>
        <div className='row'>
        <NavVertical/>
        <Routes>
          <Route path="/" element={<Home />} />          
                   
                  
          <Route path="/articulo/:id" element={<Article />} />
          {/* <Route path="/crearArticulo" element={<BlogEntryForm />} /> */}
          <Route path="/crearArticulo" element={<CreateArticle />} />
        </Routes>
        </div>        
      </div>
    </Router>
  );
}
export default App;
