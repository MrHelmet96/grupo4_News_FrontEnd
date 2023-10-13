import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
//import imagen1 from './images/imagen_noticia1.jpg'
import 'bootstrap/dist/css/bootstrap.css';

export class Article extends Component {
  constructor(props) {
    super(props)

    this.state = {
      articles: []
    }
  }

  componentDidMount() {

    fetch("http://localhost:8080/articles/")
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
    const mostrarArticulo = this.state.articles.map((article, index) => {
      return (
        <>
        <div className='container'>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <h2>{article.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
            </div>
          </div>
        </div>
        </>
      )
    });
    return(
      <>
        {mostrarArticulo}
      </>
    )
  }

}

export default Article;