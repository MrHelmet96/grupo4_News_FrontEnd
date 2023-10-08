import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from '../src/components/header';
import NavBar from '../src/components/navBar';
import Home from '../src/components/home';
import Category from '../src/components/category'; // Componente para mostrar noticias de una categoría específica

function App() {
  return (
    <Router>
      <div>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/categoria/:category" component={Category} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
