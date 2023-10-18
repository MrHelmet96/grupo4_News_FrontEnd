import React, {useState} from 'react';
import './LoginSignup.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const LoginSignup = () => {

     const [action, setAction] = useState("Iniciar Sesion");

    return(
        <div classname='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action==="Iniciar Sesion"?<div></div>:<div className="input">
                <img src={user_icon} alt="" />
                <input type="number" id = "user_id" placeholder='ID'/>
                <input type="text" id = "name" placeholder='Nombre'/>
                <input type="text" id="surname" placeholder='Apellido'/>
                <input type="tel" id="phone_number" placeholder='Telefono'/>
            </div>}
            

            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" id="email" placeholder='Email'/>
            </div>

            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" id ="password" placeholder='Password'/>
            </div>
            </div>
            {action==="Registrase"?<div></div>:<div className="forgot-password">Olvidaste la contraseña? <span>clickea Aqui!</span></div>}
            
            <div className="submit-container">
                <div className={action==="Registrarse"?"submit gray":"submit"} onClick={() => {setAction("Registrarse")}}>Registrarse</div>
                <div className={action==="Iniciar Sesion"?"submit gray":"submit"} onClick={() => {setAction("Iniciar Sesion")}}>Iniciar Sesion</div>
            </div>
        </div>
    )
}

export default LoginSignup
