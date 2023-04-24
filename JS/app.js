function revisar(){
  // TOMAR DATOS
  var datos={"dato1":$('#email').val() , "dato2":$('#contraseña').val()};
  // CONSULTAS
  if(validarContenidoEmail($('#email').val()) == true){
      if(validarContenidoContrasena($('#contraseña').val()) == true){
          window.location.href = "../html/paginaprincipal.html";
      }
      else{
          window.alert("Contraseña no valido");
      }
  }
  else {
      window.alert("Correo electronico no valido");
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

function llamarsugerencias(){
  var datos={};
  $.ajax({
      data: datos,
      url: '../html/sugerencias.html',
      type: 'GET',
      success: function(response){
          $("#contenedorPrincipal").html(response);
      }
  });
}

function llamarranking(){
  var datos={};
  $.ajax({
      data: datos,
      url: '../html/ranking.html',
      type: 'GET',
      success: function(response){
          $("#contenedorPrincipal").html(response);
      }
  });
}

function llamarcalendario(){
  var datos={};
  $.ajax({
      data: datos,
      url: '../html/calendario.html',
      type: 'GET',
      success: function(response){
          $("#contenedorPrincipal").html(response);
      }
  });
}

function llamardesafios(){
  var datos={};
  $.ajax({
      data: datos,
      url: '../html/desafios.html',
      type: 'GET',
      success: function(response){
          $("#contenedorPrincipal").html(response);
      }
  });
}

function llamarwiki(){
  var datos={};
  $.ajax({
      data: datos,
      url: '../html/wiki.html',
      type: 'GET',
      success: function(response){
          $("#contenedorPrincipal").html(response);
      }
  });
}

function llamarmicuenta(){
  var datos={};
  $.ajax({
      data: datos,
      url: '../html/verperfil.html',
      type: 'GET',
      success: function(response){
          $("#contenedorPrincipal").html(response);
      }
  });
}

function irpaginaprincipal(){
  window.location.href = "../html/paginaprincipal.html";
}