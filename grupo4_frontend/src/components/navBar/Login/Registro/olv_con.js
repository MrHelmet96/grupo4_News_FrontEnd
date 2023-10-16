/* Respectivas validaciones */

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar= false
    /* Validacion del Email (caracteres) */
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    /* Reincio de los valores */
    parrafo.innerHTML = ""
    if (entrar){
        parrafo.innerHTML = warnings
    }
})
