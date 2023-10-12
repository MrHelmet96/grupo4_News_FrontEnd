import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Estilo por defecto de react-quill

class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  handleTextChange = (value) => {
    this.setState({ text: value });
  }

  render() {
    return (
      <div>
        <ReactQuill value={this.state.text} onChange={this.handleTextChange} />
      </div>
    );
  }
}

export default TextEditor;