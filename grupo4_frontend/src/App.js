import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from '../src/components/header/header';
import Footer from '../src/components/footer/footer';
import NavBar from '../src/components/navBar/navBar';
import Home from '../src/components/home';
import Category from '../src/components/category'; // Componente para mostrar noticias de una categoría específica
import TextEditor from './components/textEditor/TextEditor';
import Article from './components/article';
// import Footer from '../src/components/footer';

function App() {
  return (
    <Router>
      <div className='container'>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articulo" element={<Article />} />
          <Route path="/crearArticulo" element={<TextEditor />} />
          <Route path="/categoria/:category" component={Category} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
