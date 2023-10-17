import React, { useState } from 'react';

const LoginModal = () => {
  const [modal, setModal] = useState(false);
  const [isLogin, setLogin] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleConfirmModal = () => setConfirmModal(!confirmModal);

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:8080/security/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        setLogin(true);
        setLoginError(false);
        toggle();
      } else {
        setLoginError(true);
      }
    } catch (error) {
      console.error(error);
      setLoginError(true);
    }
  };

  const handleLogout = () => {
    if (isLogin) {
      toggleConfirmModal();
    } else {
      toggle();
    }
  };

  const handleRemoveAdmin = () => {
    localStorage.removeItem("admin");
    setLogin(false);
    toggleConfirmModal();
  };

  return (
    <>
      <button className="btn btn-primary" onClick={handleLogout}>
        {isLogin ? "Cerrar sesión" : "Iniciar sesión"}
      </button>

      <div className="modal" tabIndex="-1" role="dialog" style={{ display: modal ? "block" : "none" }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {isLogin ? "Cerrar sesión" : "Iniciar sesión"}
              </h5>
              <button type="button" className="close" onClick={toggle}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {isLogin ? (
                <p>¡Bienvenido!</p>
              ) : (
                <form>
                  <div className="form-group">
                    <label htmlFor="email">Correo electrónico</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Contraseña</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </form>
              )}
              {loginError && (
                <div className="alert alert-danger">Credenciales inválidas, intente nuevamente</div>
              )}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={toggle}>
                Cancelar
              </button>
              <button type="button" className="btn btn-primary" onClick={isLogin ? handleRemoveAdmin : handleLogin}>
                {isLogin ? "Confirmar" : "Iniciar sesión"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal" tabIndex="-1" role="dialog" style={{ display: confirmModal ? "block" : "none" }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Confirmar cierre de sesión</h5>
              <button type="button" className="close" onClick={toggleConfirmModal}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              ¿Está seguro de que desea cerrar sesión?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={toggleConfirmModal}>
                Cancelar
              </button>
              <button type="button" className="btn btn-primary" onClick={handleRemoveAdmin}>
                Confirmar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
