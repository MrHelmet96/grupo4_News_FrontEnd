import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


export class ArticleGrid extends Component {
  constructor(props) {
    super(props)

    this.state = {
      articles: [],
      category_id: null,
      category_name: '',
      categories: [],
      originalArticles: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/articles")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          articles: result,
          originalArticles: result,  // Almacenando la lista original aquí
        });
      })
      .catch((error) => {
        console.error('Error al obtener artículos: ', error);
      });

      // Cargando categorías
    fetch('http://localhost:8080/categories')
    .then((res) => res.json())
    .then((result) => {
      this.setState({
        categories: result,
      });
    })
    .catch((error) => {
      console.error('Error al obtener categorías: ', error);
    });

  }

  // Función para filtrar noticias por categoría
  filtrarPorCategoria(categoria) {
    console.log('Filtrar por categoría:', categoria);
    console.log('originalArticles:', this.state.originalArticles);
    console.log('Articles:', this.state.articles);
    console.log('id categoria:', this.state.category_id);
    console.log('name categoria:', this.state.category_name);
    // Filtrar las noticias por categoría de la lista original
    const entradasFiltradas = this.state.originalArticles.filter((article) => article.category_id === categoria);

    this.setState({ articles: entradasFiltradas });
  }

  mostrarTodasCategorias() {
    console.log('Mostrar todas las categorías');
    // Restablecer la lista de entradas para mostrar todas las categorías
    this.setState({ articles: this.state.originalArticles });
  }

  render() {

    const categorias = ['1', '2', '3', '4', '5', '6'];

    const mostrarBotones = categorias.map((categoria, index) => (
      <button className='btn btn-dark ' key={index} onClick={() => this.filtrarPorCategoria(categoria)}>
        {categoria}
      </button>
    ));

    mostrarBotones.push(
      <button className='btn btn-dark ' key="all" onClick={() => this.mostrarTodasCategorias()}>
        Todas las categorías
      </button>
    );

    const mostrarPreview = this.state.articles.map((article, index) => {
      return (
        <div className="d-flex justify-content-between border-bottom border-dark border-2" style={{ height: '120px' }} key={index}>
          <div className="d-flex flex-column align-self-center">
            <h3 className='fs-1'>{article.title}</h3>
            <p className='text-muted'>{article.subtitle}</p>
          </div>
          <div className='d-flex flex-column justify-content-evenly'>
            <Link to={`/articulo/${article.article_id}`} className="align-self-center">
              <i class="fa-solid fa-angles-right"></i>
            </Link>
          </div>
        </div>

      )
    });

    return (
      <div className='container d-flex flex-column-reverse'>
        {mostrarPreview}
        <div className="d-flex justify-content-around my-4 ">{mostrarBotones}</div>
      </div>
    )
  }
}

export default ArticleGrid;