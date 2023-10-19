import React, { Component } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';



export class InternalCreateArticle extends Component {

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

            fetch("http://localhost:8080/articles/:" + this.props.params.article_id, parametros)
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
                                    autoClose: 2500,
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
                                    autoClose: 2500,
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
                                autoClose: 2500,
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
                                autoClose: 2500,
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
        return (

            <div className='col-10'>
                <div className='row'>
                    <div className=" my-5 border-bottom       border-dark border-2 ps-5 pb-3">
                        <Link to="/">
                            <i class="fa-solid fa-angles-left"></i>
                        </Link>
                    </div>
                    <div className='col-10 mt-4 ms-5'>
                        <h1>{this.props.params.article_id ? `Edición del Artículo ${this.props.params.article_id}` : "Cree su entrada aquí:"}</h1>
                    </div>
                </div>


                <div className='row'>
                    <div className='col'>
                        <form className='mx-5' onSubmit={this.handleSubmit}>
                            <br />
                            <div className="form-floating">
                                <h6>Título</h6>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="floatingTitle"
                                    placeholder="title"
                                    onChange={this.handleChange}
                                    value={this.state.title}
                                    name='title'
                                />
                            </div>
                            <br />
                            <h6>Subtítulo</h6>
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
                            </div>
                            <br />
                            <div className="">
                                <h6>Contenido</h6>
                                <textarea
                                    type="text"
                                    rows={8}
                                    className="form-control"
                                    id="floatingContent"
                                    placeholder="Su entrada..."
                                    onChange={this.handleChange}
                                    value={this.state.content}
                                    name='content'
                                />
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

export default CreateArticle




export function CreateArticle() {
    const p = useParams();

    const navigate = useNavigate();

    return (
        <>
            <InternalCreateArticle navigate={navigate} params={p} />
        </>
    );
}