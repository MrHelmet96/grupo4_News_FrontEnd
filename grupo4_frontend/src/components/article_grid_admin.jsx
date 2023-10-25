import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


export class ArticleGridAdmin extends Component {
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

    let parametros = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': sessionStorage.getItem('token')
      }
  }

    fetch("http://localhost:8080/articles", parametros) 
      .then(res => res.json())
      .then(result => {
        console.log(result)
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

    const entradasFiltradas = this.state.originalArticles.filter((article) => article.category_id == categoria);

    this.setState({ articles: entradasFiltradas });
  }

  mostrarTodasCategorias() {
    console.log('Mostrar todas las categorías');
    // Restablecer la lista de entradas para mostrar todas las categorías
    this.setState({ articles: this.state.originalArticles });
  }

  handleDelete(articleId) {
    // Aquí puedes hacer una solicitud al servidor para eliminar el artículo por su ID.
    // Puedes usar la función fetch para hacer la solicitud DELETE.

    fetch(`http://localhost:8080/articles/${articleId}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.status === 200) {
          // Actualiza el estado para reflejar la eliminación del artículo.
          this.setState(prevState => ({
            articles: prevState.articles.filter(article => article.article_id !== articleId)
          }));
        }
      })
      .catch(error => {
        console.error('Error al eliminar el artículo:', error);
      });
  }


  render() {

    var categorias = this.state.categories;

    const mostrarBotones = categorias.map((categoria, index) => (
      <button className='btn btn-dark ' key={index} onClick={() => this.filtrarPorCategoria(categoria.category_id)}>
        {categoria.category_name}
      </button>


    ));

    mostrarBotones.push(
      <button className='btn btn-dark ' key="all" onClick={() => this.mostrarTodasCategorias()}>
        Todas las categorías
      </button>
    );

    const mostrarPreview = this.state.articles.map((article, index) => {
      return (
        <div className="d-flex justify-content-between border-bottom border-dark border-2" style={{height: '170px'}} key={index}>
          <div className="d-flex flex-column align-self-center" style={{ width: '1200px' }}>
            <h3 className='fs-1'>{article.title}</h3>
            <p className='text-muted'>{article.subtitle}</p>
          </div>
          <div className='d-flex flex-column justify-content-evenly'>
            <button onClick={() => this.handleDelete(article.article_id)} className="btn btn-danger"><i class="bi bi-trash3">Eliminar</i></button>
            <Link to={`/crearArticulo/${article.article_id}`}><i className="btn bi bi-pencil-square">Editar</i></Link>
            <Link to={`/articulo/${article.article_id}`} className="align-self-center">
              <i class="fa-solid fa-angles-right">ir a noticia</i>
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

export default ArticleGridAdmin;