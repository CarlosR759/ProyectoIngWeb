// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => { // funcion flecha, reemplaza la palabra funcion con tipo void 
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation'); // query selector para la funcion en la etiqueta form en el html
    
    let email=document.getElementById("email");
    console.log("el correo es: " + email.value);

    // capturando el valor del campo contrasenya 
    let password=document.getElementById("contrasenya");
    console.log("la contraseña es: " + password.value);

    // capturando el valor del campo contrasenya2
    let password2=document.getElementById("contrasenya2");
    if (password2 != null) {
      console.log("la recontraseña es: " + password2.value);
    }
    

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) { // funcion de bootstrap que chequea a los campos estan validados segun las condiciones en el html 
            
            // cambiar mensaje de invalidacion
            if (password.value != "" && !checkPattern()) {
                console.log("el password no tiene el formato correcto");
                campos.children[3].getElementsByClassName("invalid-feedback")[0].innerHTML = "Contraseña no valida";
            }
            else if (checkPattern()){
              document.getElementById("submit").onclick = function () {
                window.location = "paginaprincipal.html";
            };
            }

          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated'); // significa que el formulario fue validado 

        // imprimir todos los variables - FIXME: NO SALE NADA 
        console.log("el correo es: " + email.value); 
        console.log("la contraseña es: " + password.value);
        if (password2 != null) {
          console.log("la recontraseña es: " + password2.value);
        }
        
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
