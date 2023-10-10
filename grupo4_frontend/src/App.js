import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from '../src/components/header/header';
import NavBar from '../src/components/navBar/navBar';
import Home from '../src/components/home';
import Category from '../src/components/category'; // Componente para mostrar noticias de una categoría específica
// import Footer from '../src/components/footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <NavBar />
        <Home />
        <Routes>
          <Route path="/Home" exact component={Home} />
          <Route path="/categoria/:category" component={Category} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
/* const App = () => {
  return (
    <div className="App">
      <Footer />
    </div>
  );
}
*/