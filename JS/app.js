// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => { // funcion flecha, reemplaza la palabra funcion con tipo void 
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation'); // query selector para la funcion en la etiqueta form en el html
    
    // capturando el valor del campo contrasenya 
    let password=document.getElementById("contrasenya");

    // capturando el valor del campo contrasenya2
    let password2=document.getElementById("contrasenya2");

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) { // funcion de bootstrap que chequea a los campos estan validados segun las condiciones en el html 
            
            // cambiar mensaje de invalidacion
            if (password.value != "" && !checkPattern()) {
                console.log("el password no tiene el formato correcto");
                campos.children[3].getElementsByClassName("invalid-feedback")[0].innerHTML = "Contraseña no valida";
            }
            // sacar la contraseña
            console.log("la contraseña es: " + password.value);

          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated'); // significa que el formulario fue validado 
        // FIXME: PON ACA UNA FUNCION PARA IR A LA PAGINA PRINCIPAL
        document.getElementById("submit").onclick = function () {
          window.location = "paginaprincipal.html";
      };
      }, false)
    })
  })()

  // chequear el patron de la contraseña 
  function checkPattern(){
    var elem = document.getElementById("contrasenya");
    var pattern = elem.getAttribute("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$");
    var re = new RegExp(pattern);
    if (re.test(elem.value)) {
    return true;
    } else {
    return false;
    }
  }

// LISTA DE QUEHACERES 
// - pon un enlace a la pagina principal en el buton de submit 
// - hacer la validacion para la pagina de login tambien