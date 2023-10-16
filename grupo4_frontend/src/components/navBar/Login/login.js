const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById("form") 
const parrafo = document.getElementById("warnings") 
const button = document.getElementById('button')

/* Enlaze con la BD*/

/* Respectivas validaciones */
form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar= false
    /* Validacion del Email (caracteres) */
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    /* Reincio de los valores */
    parrafo.innerHTML = ""
    if(!regexEmail.test(email.value)){
        warnings += `El Email no es valido <br>`
        entrar = true
    }
    if (password.value.length <8){
        warnings += `La Contraseña no es valida <br>`
        entrar = true
    }
    if (entrar){
        parrafo.innerHTML = warnings
    }

})

