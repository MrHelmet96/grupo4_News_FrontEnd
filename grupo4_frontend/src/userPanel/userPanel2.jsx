import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export class UserPanelDos extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
        this.handleClickDelete = this.handleClickDelete.bind(this);
    }

    
    // funcion ejecutada al montar el componente, tras ejecutarse el render, 
    // este metodo realiza un fetch al endpoint listar()
    // para traer el listado de vehiculos y setearlos en en estado "vehiculos"
    componentDidMount() {

        let parametros = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': sessionStorage.getItem('token')
            }
        }



        fetch("http://localhost:8080/users", parametros)
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
                            users: result.body
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
                }
            ).catch(
                (error) => { console.log(error) }
            );


    }

    // handler invocado mediante el evento onCLick() del boton eliminar en la tabla vehiculos
    // recibe como parametro a "vehiculo_id" y lo utilia para pegarle al delete del backend
    handleClickDelete(user_id) {
        let parametros = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        }
        
        fetch(`http://localhost:8080/users/${user_id}`, parametros)
            .then(res => {
                if (res.status === 200) {
                    // Actualiza el estado para reflejar la eliminación del artículo.
                    this.setState(prevState => ({
                      users: prevState.users.filter(user => user.user_id !== user_id)
                    }));
                  }
                return res.json()
                    .then(body => {
                        return {
                            status: res.status,
                            ok: res.ok,
                            headers: res.headers,
                            body: body
                        };
                    });
            }).then(
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
                        this.componentDidMount();
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
                }
            ).catch(
                (error) => { console.log(error) }
            );
    }


    render() {
        const filas = this.state.users.map((user, index) => {
            return (
                <tr key={index}>
                    <td>{user.user_id}</td>
                    <td>{user.name}</td>
                    <td>{user.surname}</td>
                    <td>{user.rol_id}</td>
                    <Link to={`/panel/users/edit/${user.user_id}`} className='btn btn-primary'>
                        <span className="material-symbols-outlined">edit</span>
                    </Link>
                    <button className='btn btn-danger ms-2' onClick={() => this.handleClickDelete(user.user_id)}>
                        <span className="material-symbols-outlined">delete</span>
                    </button>
                </tr>
            )

        });
        return (
            <div className='col-10'>
                <div className='d-flex flex-column my-5'>
                    <Link to={'/admin'} className='btn btn-secondary'>Ir a panel de entradas</Link>
                </div>
                <div className='d-flex flex-column my-5'>
                    <h4 className='align-self-center'>Panel de Usuarios</h4>
                </div>
                <div className='container'>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Rol</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filas}
                        </tbody>
                    </table>
                    <br />
                </div>
            </div>
        );

    }
}

export default UserPanelDos