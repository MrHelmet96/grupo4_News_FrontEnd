import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavVertical from './components/navBar/nav_vertical';
import Home from '../src/components/home';
// import Category from '../src/components/category'; // Componente para mostrar noticias de una categoría específica
import BlogEntryForm from './components/blogentryform/blogentryform';
import Article from './components/article';

function App() {
  return (
    <Router>
      <div className="container-fluid" style={{ width: '70vw', height: '100vh' }}>
        <div className='row h-100'>
        <NavVertical/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articulo/:id" element={<Article />} />
          <Route path="/crearArticulo" element={<BlogEntryForm />} />
          {/* <Route path="/categoria/:category" component={Category} /> */}
        </Routes>
        </div>        
      </div>
    </Router>
  );
}
export default App;
