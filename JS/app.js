function revisar(){
  // TOMAR DATOS
  var datos={"dato1":$('#email').val() , "dato2":$('#contraseña').val()};
  // CONSULTAS
  if(validarContenidoEmail($('#email').val()) == true){
      if(validarContenidoContrasena($('#contraseña').val()) == true){
          window.location.href = "../html/paginaprincipal.html"
          console.log("AQUI PORFA")
      }
      else{
          window.alert("Contraseña no valido")
      }
  }
  else {
      window.alert("Correo no valido")
  }
}

function validarContenidoEmail(email) {
  // Busca si el correo electrónico tiene contenido
  if (email.indexOf('@') !== -1) {
      return true;
  } else {
      return false;
  }
}

function validarContenidoContrasena(contrasena) {
  // Verifica si la contraseña tiene al menos un carácter
  if (contrasena.length > 0) {
    return true;
  } else {
    return false;
  }
}

function llamarformulario(){
  var datos={};
  $.ajax({
      data: datos,
      url: '../html/formulario.html',
      type: 'GET',
      success: function(response){
          $("#contenedorPrincipal").html(response);
      }
  });
}

function irpaginaprincipal(){
  window.location.href = "../html/paginaprincipal.html";
}