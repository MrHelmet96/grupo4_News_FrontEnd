import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


export class ArticleGrid extends Component {
  constructor(props) {
    super(props)

    this.state = {
      articles: [],
      categories: []
    }
  }

  componentDidMount() {

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

    fetch("http://localhost:8080/articles")
      .then(res => res.json())
      .then(result => {
        console.log(result)
        this.setState({
          articles: result
        });
      },
        (error) => {

        }
      )
  }

  filtrarPorCategoria(categoria) {
    // Filtrar las entradas por la categoría seleccionada
    const entradasFiltradas = this.state.articles.filter((article) => article.category_name === categoria);

    this.setState({ articles: entradasFiltradas });
  }

  mostrarTodasCategorias() {
    // Restablecer la lista de entradas para mostrar todas las categorías
    fetch("http://localhost:8080/articles")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          articles: result
        });
      },
        (error) => {
          // Manejar errores
        });
  }

  render() {

    const categorias = ['sports', 'health', 'gastronomy', 'entertainment', 'politics and economy', 'others'];

  const mostrarBotones = categorias.map((categoria, index) => (
    <button className='btn btn-dark ' key={index} onClick={() => this.filtrarPorCategoria(categoria)}>
      {categoria}
    </button>
  ));

  mostrarBotones.push(
    <button key="all" onClick={() => this.mostrarTodasCategorias()}>
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