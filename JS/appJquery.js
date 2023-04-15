$(document).ready(function() {
    $( ".needs-validation" ).validate( {
    errorClass: "is-invalid",
    validClass: "is-valid",
    rules: {
    email: {
    required: true,
    },
    contrasenya:{
    required: true,
    pwcheck: true,
    minlength: 8},
    },
    messages:{
    email:{
    required: "el correo es requerido",
    email: "el formato no es el correcto"
    },
    contrasenya:{
    required: "la contraseña es requerida",
    pwcheck: "la contraseña no tiene un formato válido",
    minlength: "debe contener 8 caracteres"
    }
}
});
$.validator.addMethod("pwcheck",
function(value, element) {
return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/.test(value);
});
});