import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

export class ArticleGrid extends Component {
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

  render() {
    const mostrarPreview = this.state.articles.map((article, index) => {
      return (
        <div className="row justify-content-center" key={index}>
          <div className="col-lg-9">
            <h2>{article.title}</h2>
            <Link to={`/articulo/${article.article_id}`}>
              <button className="btn btn-primary">Ir a noticia</button>
            </Link>
          </div>
        </div>
      )
    });

    return (
      <div className='container'>
        {mostrarPreview}
      </div>
    )
  }
}

export default ArticleGrid;