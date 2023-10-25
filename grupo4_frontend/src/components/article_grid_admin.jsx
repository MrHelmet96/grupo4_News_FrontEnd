import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

export class ArticleGridAdmin extends Component {
  constructor(props) {
    super(props); // Llama al constructor de la clase padre (Component) y pasa las propiedades a él.

    // Estado inicial del componente, que se utiliza para almacenar datos y realizar actualizaciones en la interfaz.
    this.state = {
      articles: [],        // Almacena la lista de artículos.
      category_id: null,   // Almacena el ID de la categoría seleccionada.
      category_name: '',   // Almacena el nombre de la categoría seleccionada.
      categories: [],      // Almacena la lista de categorías.
      originalArticles: [] // Almacena la lista original de artículos (sin filtrar).
    };
  }

  // El método componentDidMount se llama automáticamente después de que el componente se haya montado en el DOM.
  componentDidMount() {
    // Configura las opciones para realizar una solicitud GET a la API de artículos.
    let parametros = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': sessionStorage.getItem('token') // Se incluye el token de autorización almacenado en la sesión.
      }
    };

    // Realiza una solicitud para obtener la lista de artículos desde la API.
    fetch("http://localhost:8080/articles", parametros)
      .then(res => res.json()) // Convierte la respuesta en formato JSON.
      .then(result => {
        // Actualiza el estado del componente con la lista de artículos obtenida y almacena la lista original.
        this.setState({
          articles: result,
          originalArticles: result, // Almacena la lista original aquí para futuros filtrados.
        });
      })
      .catch(error => {
        console.error('Error al obtener artículos: ', error); // Maneja errores en la solicitud.
      });

    // Realiza una solicitud para cargar la lista de categorías desde la API.
    fetch('http://localhost:8080/categories')
      .then(res => res.json()) // Convierte la respuesta en formato JSON.
      .then(result => {
        // Actualiza el estado del componente con la lista de categorías obtenida.
        this.setState({
          categories: result,
        });
      })
      .catch(error => {
        console.error('Error al obtener categorías: ', error); // Maneja errores en la solicitud.
      });
  }

  // Función para filtrar noticias por categoría.
  filtrarPorCategoria(categoria) {
    // Filtra los artículos originales por el ID de la categoría seleccionada.
    const entradasFiltradas = this.state.originalArticles.filter(article => article.category_id == categoria);

    // Actualiza el estado para mostrar las noticias filtradas.
    this.setState({ articles: entradasFiltradas });
  }

  // Función para mostrar todas las categorías (restablece la lista original).
  mostrarTodasCategorias() {
    console.log('Mostrar todas las categorías'); // Muestra un mensaje en la consola.

    // Restablece la lista de artículos para mostrar todas las categorías.
    this.setState({ articles: this.state.originalArticles });
  }

  // Función para manejar la eliminación de un artículo.
  handleDelete(articleId) {
    // Muestra una alerta de confirmación al usuario.
    let confirmacion = window.confirm("¿Estás seguro de que deseas eliminar este artículo?");

    // Si el usuario hace clic en "Aceptar" en la alerta de confirmación, procede con la eliminación.
    if (confirmacion) {
      // Realiza una solicitud DELETE al servidor para eliminar el artículo.
      fetch(`http://localhost:8080/articles/${articleId}`, {
        method: 'DELETE'
      })
        .then(response => {
          if (response.status === 200) {
            // Actualiza el estado para reflejar la eliminación del artículo, filtrándolo de la lista.
            this.setState(prevState => ({
              articles: prevState.articles.filter(article => article.article_id !== articleId)
            }));
          }
        })
        .catch(error => {
          console.error('Error al eliminar el artículo:', error); // Maneja errores en la solicitud de eliminación.
        });
    }
  }

  render() {
    // Obtiene las categorías del estado del componente.
    var categorias = this.state.categories;

    // Crea botones de categoría a partir de la lista de categorías.
    const mostrarBotones = categorias.map((categoria, index) => (
      <button className='btn btn-dark ' key={index} onClick={() => this.filtrarPorCategoria(categoria.category_id)}>
        {categoria.category_name}
      </button>
    ));

    // Agrega un botón adicional para mostrar todas las categorías.
    mostrarBotones.push(
      <button className='btn btn-dark ' key="all" onClick={() => this.mostrarTodasCategorias()}>
        Todas las categorías
      </button>
    );

    // Mapea la lista de artículos y genera vistas previas de cada artículo.
    const mostrarPreview = this.state.articles.map((article, index) => {
      return (
        <div className="d-flex justify-content-between border-bottom border-dark border-2" style={{ height: '170px' }} key={index}>
          <div className="d-flex flex-column align-self-center" style={{ width: '1200px' }}>
            <h3 className='fs-1'>{article.title}</h3>
            <p className='text-muted'>{article.subtitle}</p>
          </div>
          <div className='d-flex flex-column justify-content-evenly'>
            <button onClick={() => this.handleDelete(article.article_id)} className="btn btn-danger">
              <i class="bi bi-trash3">Eliminar</i>
            </button>
            <Link to={`/crearArticulo/${article.article_id}`}>
              <i className="btn bi bi-pencil-square">Editar</i>
            </Link>
            <Link to={`/articulo/${article.article_id}`} className="align-self-center">
              <i class="fa-solid fa-angles-right">ir a noticia</i>
            </Link>
          </div>
        </div>
      )
    });

    return (
      <div className='container d-flex flex-column-reverse'>
        {mostrarPreview} {/* Muestra las vistas previas de los artículos */}
        <div className="d-flex justify-content-around my-4 ">{mostrarBotones}</div> {/* Muestra los botones de categoría */}
      </div>
    )
  }
}

export default ArticleGridAdmin;
