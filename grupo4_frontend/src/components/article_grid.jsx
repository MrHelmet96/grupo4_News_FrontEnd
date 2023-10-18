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
        <div className="d-flex justify-content-between mt-5 mb-5 border-bottom border-dark border-2" key={index}>
          <div className="d-flex flex-column">
            <h3 className='fs-1'>{article.title}</h3>
            <p className='text-muted'>{article.subtitle}</p>
          </div>
          <div>
            <Link to={`/articulo/${article.article_id}`} className=" align-self-center">
              <i class="fa-solid fa-angles-right"></i>
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

export default ArticleGrid;