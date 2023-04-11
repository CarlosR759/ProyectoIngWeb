document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("crearcuenta").addEventListener("submit",function(evento){
         let email=document.getElementById("email").value;
         let contrasenya=document.getElementById("contrasenya").value;
         let recontrasenya=document.getElementById("contrasenya2").value;
         const coleccion=document.getElementById("crearcuenta").getElementsByTagName("li");
         if(email==""){
            // tratando de usar alerts en vez de mensajes con span
            alert("El correo electrónico está vacio");
        }
         if(contrasenya==""){
              coleccion[1].querySelector("span").innerHTML="La contraseña está vacia";
         }
         if(contrasenya!=recontrasenya){
            coleccion[1].querySelector("span").innerHTML="Las contraseñas deben concordar";
         }
          evento.preventDefault();
    }); 
});

// LISTA DE QUEHACERES 
// - validar el formato del correo (con @) 
// - dar alerts con mensajes mas claras con input invalido 
// - pon un enlace a la pagina principal en el buton de submit 
// - hacer la validacion para la pagina de login tambien