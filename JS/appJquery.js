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
    contrasenya2:{
        required: true,
        pwcheck: true,
        minlength: 8},
    },
    messages:{
    email:{
    required: "el correo es requerido",
    email: "el formato no es el correcto, necesita @"
    },
    contrasenya:{
    required: "la contraseña es requerida",
    pwcheck: "la contraseña tiene que ser de formato válido con letras minúsculas, mayúsculas y otro carácter",
    minlength: "debe contener 8 caracteres"
    },
    contrasenya2:{
    required: "la contraseña es requerida",
    pwcheck: "la contraseña tiene que ser de formato válido con letras minúsculas, mayúsculas y otro carácter",
    minlength: "debe contener 8 caracteres"
    }
}
});
$.validator.addMethod("pwcheck",
function(value, element) {
return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/.test(value);
});
});