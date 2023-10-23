import React, { Component } from 'react';

class CommentSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment_id: null,
      content: '',
      user_id: null,
      article_id: null
    };
  }

  componentDidMount() {


    // Realiza una solicitud al backend para obtener los comentarios del artículo actual (this.props.articleId) y establecerlos en el estado.
    // Utiliza la ruta adecuada en tu backend para obtener los comentarios.
  }

  handleCommentChange = (event) => {
    this.setState({ newComment: event.target.value });
  };

  handleCommentSubmit = () => {
    // Realiza una solicitud al backend para agregar un nuevo comentario.
    // Asegúrate de enviar el contenido del comentario (this.state.newComment), el ID del usuario (this.props.user.user_id) y el ID del artículo (this.props.articleId) al backend.
    // Luego, actualiza la lista de comentarios con el nuevo comentario creado.
  };

  render() {
    const { comments, newComment } = this.state;
    const { user } = this.props;

    return (
      <div className="comment-section">
        <h2>Comentarios</h2>
        <div className="comment-list">
          {comments.map((comment) => (
            <div key={comment.comment_id} className="comment">
              <p>{comment.content}</p>
              <p>Publicado por: {comment.user_name}</p>
            </div>
          ))}
        </div>
        {user && (
          <div className="comment-form">
            <textarea
              placeholder="Escribe un comentario..."
              value={newComment}
              onChange={this.handleCommentChange}
            />
            <button onClick={this.handleCommentSubmit}>Comentar</button>
          </div>
        )}
      </div>
    );
  }
}

export default CommentSection;