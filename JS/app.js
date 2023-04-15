// document.addEventListener("DOMContentLoaded",function(){
//     document.getElementById("crearcuenta").addEventListener("submit",function(evento){
//          let email=document.getElementById("email").value;
//          let contrasenya=document.getElementById("contrasenya").value;
//          let recontrasenya=document.getElementById("contrasenya2").value;
//          const coleccion=document.getElementById("crearcuenta").getElementsByTagName("li");
//          if(email==""){
//             // tratando de usar alerts en vez de mensajes con span
//             alert("El correo electrónico está vacio");
//         }
//          if(contrasenya==""){
//               coleccion[1].querySelector("span").innerHTML="La contraseña está vacia";
//          }
//          if(contrasenya!=recontrasenya){
//             coleccion[1].querySelector("span").innerHTML="Las contraseñas deben concordar";
//          }
//           evento.preventDefault();
//     }); 
// });

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => { // funcion flecha, reemplaza la palabra funcion con tipo void 
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation') // query selector para la funcion en la etiqueta form en el html
    
    // capturando el valor del campo contrasenya 
    let password=document.getElementById("contrasenya");

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

          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated') // significa que el formulario fue validado 
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
// - validar el formato del correo (con @) 
// - dar alerts con mensajes mas claras con input invalido 
// - pon un enlace a la pagina principal en el buton de submit 
// - hacer la validacion para la pagina de login tambien