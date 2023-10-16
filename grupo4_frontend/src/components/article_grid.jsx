import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
        <div className="d-flex justify-content-between mt-3 mb-3 border-bottom border-dark border-2" key={index}>
          <div className="d-flex flex-column">
            <h3 className=''>{article.title}</h3>
            <p className=''>{article.subtitle}</p>
          </div>
          <div>
            <Link to={`/articulo/${article.article_id}`}>
              <a className=" align-self-center"><i class="fa-solid fa-angles-right"></i></a>
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