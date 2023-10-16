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
        <div className="" key={index}>
          <div className="d-flex flex-column">
            <h3 className='p-2'>{article.title}</h3>
            <p className='p-2'>{article.subtitle}</p>
          </div>
          <div>
            <Link to={`/articulo/${article.article_id}`}>
              <a className="btn btn-primary"><i className='bi bi-arrow-right'></i></a>
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