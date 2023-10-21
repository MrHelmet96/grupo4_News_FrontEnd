import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


export class ArticleGridAdmin extends Component {
  constructor(props) {
    super(props)

    this.state = {
      articles: []
    }
  }

  componentDidMount() {

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
    const mostrarPreview = this.state.articles.map((article, index) => {
      return (
        <div className="d-flex justify-content-between border-bottom border-dark border-2" style={{height: '120px'}} key={index}>
          <div className="d-flex flex-column align-self-center">
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
      </div>
    )
  }
}

export default ArticleGridAdmin;