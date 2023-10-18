import React, { Component } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';



export class EditArticle extends Component {

    constructor(props) {
        super(props)

        this.state = {
            article_id: null,
            title: '',
            subtitle: '',
            content: ''
        }
    }

    componentDidMount() { 

        if (this.props.params.article_id) {
            let parametros = {
                method: 'GET',

                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }

            fetch("http://localhost:8080/articles/:"+ this.props.params.article_id , parametros)
                .then(res => {

                    res.json().then(
                            body => (
                                {
                                    status: res.status,
                                    ok: res.ok,
                                    headers: res.headers,
                                    body: body
                                }
                            )
                        ).then(
                            result => {
                                if (result.ok) {

                                    console.log(result)
                                    // this.setState({
                                    //     article_id: result.bodythis.state.article_id,
                                    //     title: this.state.title,
                                    //     subtitle: this.state.subtitle,
                                    //     content: this.state.content,
                                    // })
                                } else {
                                    toast.error(result.body.message, {
                                        position: "bottom-center",
                                        autoClose: 5000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                        theme: "light",
                                        });
                                }
                            });
                       })
                .catch((error) => {
                    console.log(error)
                });
        }


                    //    this.props.navigate("/")

     }

    handleSubmit = (event) => {
        event.preventDefault()
        //alert('enviando datos al backend del artículo: ' + this.state.titulo + this.state.subtitulo);

        let article = {
            article_id: this.state.article_id,
            title: this.state.title,
            subtitle: this.state.subtitle,
            content: this.state.content,
        }

        let parametros = {
            method: 'POST',
            body: JSON.stringify(article),
            headers: {
                'Content-Type': 'application/json',
            }
        }

        fetch("http://localhost:8080/articles/", parametros)
            .then(res => {

                res.json().then(
                        body => (
                            {
                                status: res.status,
                                ok: res.ok,
                                headers: res.headers,
                                body: body
                            }
                        )
                    ).then(
                        result => {
                            if (result.ok) {
                                toast.success(result.body.message, {
                                    position: "bottom-center",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "light",
                                    });
                            } else {
                                toast.error(result.body.message, {
                                    position: "bottom-center",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "light",
                                    });
                            }
                        });
                   })
            .catch((error) => {
                console.log(error)
            });
                       this.props.navigate("/")
    }


    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        // const navigate = useNavigate();
        return (

            <div className='col-10'>
                <div className='row'>
                    <div className='col'>
                        <h1>{this.props.params.article_id ? `Edición del Artículo ${this.props.params.article_id}` : "Editando Articulo"}</h1>
                    </div>
                </div>


                <div className='row'>
                    <div className='col'>

{/* <h1>{this.props.params.vehiculo_id}</h1> */}

                        <form onSubmit={this.handleSubmit}>
                            <br />
                            <div className="form-floating">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="floatingTitle"
                                    placeholder="title"
                                    onChange={this.handleChange}
                                    value={this.state.title}
                                    name='title'
                                />
                                <label htmlFor="floatingTitle">Título</label>
                            </div>
                            <br />
                            <div className="form-floating">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="floatingSubtitle"
                                    placeholder="Subtitle"
                                    onChange={this.handleChange}
                                    value={this.state.subtitle}
                                    name='subtitle'
                                />
                                <label htmlFor="floatingModelo">Subtítulo</label>
                            </div>
                            <br />

                            <div className="form-floating">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="floatingContent"
                                    placeholder="Content"
                                    onChange={this.handleChange}
                                    value={this.state.content}
                                    name='content'
                                />

                                <label htmlFor="floatingMatricula">Escriba su entrada</label>
                            </div>
                            <br />
                            <input className='btn btn-primary'
                                type="submit"
                                value="Finalizar"
                            />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Vehiculos_Edit




export function Vehiculos_Edit() {
    const p = useParams();

    const navigate = useNavigate();

    return (
        <>
            <EditArticle navigate={navigate} params={p}/>
        </>
    );
}