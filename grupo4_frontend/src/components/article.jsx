import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser'; // Importa la biblioteca

function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/articles/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setArticle(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  // Parsea el contenido HTML y lo muestra
  const parsedContent = parse(article.content);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-9">
          <h2>{article.title}</h2>
          <div className="article-content">{parsedContent}</div>
        </div>
      </div>
    </div>
  );
}

export default Article;




// -------------------------

// import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';

// export class Article extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       articles: []
//     }
//   }

//   componentDidMount() {

//     fetch("http://localhost:8080/articles/:article_id")
//       .then(res => res.json())
//       .then(result => {
//         console.log(result)
//         this.setState({
//           articles: result
//         });
//       },
//         (error) => {

//         }
//       )
//   }

//   render() {
//     const mostrarArticulo = this.state.articles.map((article, index) => {
//       return (
//         <div className="row justify-content-center" key={index}>
          
//           <div className="col-lg-9">
//             <h2>{article.title}</h2>
//            <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
//           </div>
//         </div>
//       )
//     });

//     return (
//       <div className='container'>
//         {mostrarArticulo}
//       </div>
//     )
//   }
// }

// export default Article;