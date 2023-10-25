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
            content: '',
            category_id: null,
            categories: [],
        }
    }

    componentDidMount() {

        fetch('http://localhost:8080/categories')
            .then((res) => res.json())
            .then((result) => {
                this.setState({
                    categories: result,
                });
            })
            .catch((error) => {
                console.error('Error al obtener categorías: ', error);
            });

        if (this.props.params.article_id) {
            let parametros = {
                method: 'GET',

                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }

            fetch(`http://localhost:8080/articles/${this.props.params.article_id}`, parametros)
                .then(res => {
                    return res.json()
                        .then(body => {
                            return {
                                status: res.status,
                                ok: res.ok,
                                headers: res.headers,
                                body: body
                            };
                        })
                }).then(
                    result => {
                        if (result.ok) {
                            this.setState({
                                article_id: result.body.article_id,
                                title: result.body.title,
                                subtitle: result.body.subtitle,
                                content: result.body.content
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
                    }
                ).catch(
                    (error) => { console.log(error) }
                );
        }
 }

    handleSubmit = (event) => {
        event.preventDefault()

        let article = {
            article_id: this.state.article_id,
            title: this.state.title,
            subtitle: this.state.subtitle,
            content: this.state.content,
            category_id: this.state.category_id,
        }

        let parametros = {
            method: this.props.params.article_id ? 'PUT' : 'POST',
            body: JSON.stringify(article),
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const url = this.props.params.article_id ? `http://localhost:8080/articles/${this.props.params.article_id}` : "http://localhost:8080/articles"

        fetch(url, parametros)
            .then(res => {
                return res.json()
                    .then(body => {
                        return {
                            status: res.status,
                            ok: res.ok,
                            headers: res.headers,
                            body: body
                        };
                    })
            }).then(
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
                        this.props.navigate("/admin")
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
                }
            ).catch(
                (error) => { console.log(error) }
            );
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
};

    handleCategoryChange = (event) => {
        this.setState({ category_id: event.target.value });
};

    render() {
        return (

            <div className='col-10'>
                <div className='row'>
<<<<<<< HEAD
                    <div className=" my-5 border-bottom       border-dark border-2 ps-5 pb-3">
                        <Link to="/admin">
=======
                    <div className=" my-5 border-bottom border-dark border-2 ps-5 pb-3">
                        <Link to="/">
>>>>>>> 743c3f7fee2f9545245622df064905923f6bc07a
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
                            <h6>Categoria</h6>
                            <div>
                            <select
                                className="form-select"
                                value={this.state.category_id || ''}
                                onChange={this.handleCategoryChange}
                                name="category_id"
                            >
                                <option value="" disabled>
                                    Seleccione una categoría
                                </option>
                                {this.state.categories.map((category) => (
                                    <option key={category.category_id} value={category.category_id}>
                                        {category.category_name}
                                    </option>
                                ))}
                            </select>
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
    //    this.props.navigate("/")
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