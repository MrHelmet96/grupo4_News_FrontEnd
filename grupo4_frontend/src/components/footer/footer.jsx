import React from 'react';
import facebook from '../images/fcb.png'
import instagram from '../images/inst.png'
import twitter from '../images/twtt.png'
import address from '../images/house.png'
import phone from '../images/phone.png'
import email from '../images/email.png'


import "./footer.css"

function Footer() {
    return (
        <footer className='bg-light text-center text-lg-start'>
            <div class="container-all">

                <div class="container-body">

                    <div class="column1">
                        <h1>Mas Informacion de la Compañia</h1>
                        <p>Nos dedicamos a llegarle información sobre noticias de carácter Nacional a los Ciudadanos. Cubriendo muchos temas, como política, economía, cultura, deporte, tecnología, y más.</p>
                    </div>

                    <div class="column2">
                        <h1>Redes Sociales</h1>

                        <div class="row">
                            <img src={facebook} alt="facebook" />
                            
                            <label>Siguenos en Facebook</label>
                        </div>

                        <div class="row">
                            <img src={instagram} alt="instagram"/>
                            <label>Siguenos en Instagram</label>
                        </div>

                        <div class="row">
                            <img src={twitter} alt="Twitter"/>
                            <label>Siguenos en Twitter</label>
                        </div>
                    </div>

                    <div class="column3">
                        <h1>Informacion de Contactos</h1>

                        <div class="row">
                            <img src={address} alt="dirección"/>
                            <label>San lorenzo N°1582, Casi Sarmiento</label>
                        </div>

                        <div class="row">
                            <img src={phone} alt="teléfono"/>
                            <label>+54 03764 - 917638</label>
                        </div>

                        <div class="row">
                            <img src={email} alt="email"/>
                            <label>Grupo_4_Noticias@gmail.com</label>
                        </div>
                    </div>

                </div>

            </div>

            <div class="container-footer">
                <div class="footer">
                    <div class="copyright">
                        Todos los derechos reservados All rights reserved
                    </div>

                    <div class="Términos y Condiciones">
                        <a href="C:\TP_Final\FrontEnd\Plantilla\Condiciones\Inf_Comp.html">Informacion Compañia</a> | <a href="C:\TP_Final\FrontEnd\Plantilla\Condiciones\Pol_Prv.html">Privacion y Politicas</a> | <a href="C:\TP_Final\FrontEnd\Plantilla\Condiciones\Term_Cond.html">Terminos y Condiciones</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;