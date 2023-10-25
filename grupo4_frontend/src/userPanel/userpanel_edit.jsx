import React, { Component } from "react";
import { useNavigate, useParams,Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-bootstrap/esm/ModalBody";
import Button from "react-bootstrap/esm/Button";

export class InternalUsersEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: null,
      name: "",
      surname: "",
      rol_id: null,
      rol_name: "",
      modal: false,
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/roles")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          roles: result,
        });
      })
      .catch((error) => {
        console.error("Error al obtener roles: ", error);
      });

    if (this.props.params.user_id) {
      let parametros = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          authorization: sessionStorage.getItem("token"),
        },
      };

      fetch(
        `http://localhost:8080/users/${this.props.params.user_id}`,
        parametros
      )
        .then((res) => {
          return res.json().then((body) => {
            return {
              status: res.status,
              ok: res.ok,
              headers: res.headers,
              body: body,
            };
          });
        })
        .then((result) => {
          if (result.ok) {
            this.setState({
              user_id: result.body.user_id,
              name: result.body.name,
              surname: result.body.surname,
              rol_id: result.body.rol_id,
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
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  // handler invocado por el evento onSubmit() del formulario, aqui hay dos caminos posibles, un POST para la creacion o un PUT para la edicion
  // eso lo diferenciamos mediante "this.props.params.vehiculo_id", acorde a su existencia debemos cambiar tanto la URL como el METHOD del fetch
  handleSubmit = (event) => {
    event.preventDefault();

    let user = {
      user_id: this.state.user_id,
      name: this.state.name,
      surname: this.state.surname,
      rol_id: this.state.rol_id,
      rol_name: this.state.rol_name,
    };

    let parametros = {
      method: this.props.params.user_id ? "PUT" : "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const url = this.props.params.user_id
      ? `http://localhost:8080/users/${this.props.params.user_id}`
      : "http://localhost:8080/users";
    fetch(url, parametros)
      .then((res) => {
        return res.json().then((body) => {
          return {
            status: res.status,
            ok: res.ok,
            headers: res.headers,
            body: body,
          };
        })
      })
      .then((result) => {
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
          this.props.navigate("/panel/users");
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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleRolChange = (event) => {
    this.setState({ rol_id: event.target.value });
  };
  render() {
    return (
      <div className="col-10">
        <div className="row">
        <Link to="/panel/users" className="my-4">
            <a href="/panel/users" >
              <i class="fa-solid fa-angles-left"></i>
            </a>
          </Link>
          <div className="col my-3">
            <h1>
              {this.props.params.user_id
                ? `Edicion del Usuario ${this.props.params.user_id}`
                : "Alta de Usuario"}
            </h1>
          </div>
          
        </div>

        <div className="row">
          <div className="col">
            <form onSubmit={this.handleSubmit}>
              <div className="form-floating">
                <input
                  disabled
                  type="number"
                  className="form-control"
                  id="user_id"
                  placeholder="user_id"
                  data-bind="value:replyNumber"
                  onChange={this.handleChange}
                  value={this.state.user_id}
                  name="user_id"
                />
                <label for="user_id">ID</label>
              </div>
              <br />

              <div className="form-floating">
                <input
                  disabled
                  type="text"
                  className="form-control"
                  id="floatingName"
                  placeholder="Nombre"
                  onChange={this.handleChange}
                  value={this.state.name}
                  name="name"
                />
                <label htmlFor="floatingName">Name</label>
              </div>
              <br />
              <div className="form-floating">
                <input
                  disabled
                  type="text"
                  className="form-control"
                  id="surename"
                  placeholder="Apellido"
                  onChange={this.handleChange}
                  value={this.state.surname}
                  name="surname"
                />

                <label htmlFor="surename">Apellido</label>
              </div>

              <br />
              <select
                className="form-select"
                id="rol"
                aria-label="Default select example"
                onChange={this.handleRolChange}
                value={this.state.rol_id}
                name="rol_id"
              >
                <option selected disabled>
                  Rol
                </option>
                <option value="1">User</option>
                <option value="2">Editor</option>
                <option value="3">Administrator</option>
              </select>
              <br />
              <input
                className="btn btn-primary"
                type="submit"
                value="Guardar"
                onSubmit={this.handleSubmit}
              />
            </form>
          </div>
        </div>

        {/* <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal> */}
      </div>
    );
  }
}

export default UsersEdit;

export function UsersEdit() {
  const p = useParams();

  const navigate = useNavigate();

  return (
    <>
      <InternalUsersEdit navigate={navigate} params={p} />
    </>
  );
}
