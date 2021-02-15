
const formulario = document.getElementById("forms");
formulario.onsubmit = function(){validar()};

function validar(){

let c1 = document.getElementById("passwd").value;
let c2 = document.getElementById("passwd2").value;

let espacios = false;
let cont = 0;

while (!espacios && (cont < c1.length)) {
  if (c1.charAt(cont) == " ")
    espacios = true;
  cont++;
}
   
if (espacios) {
  alert ("La contraseña no puede contener espacios en blanco");
  return false;
}

if (c1.length == 0 || c2.length == 0) {
  alert("Los campos de la contraseña no pueden quedar vacios");
  return false;
}
if (c1.length <= 8 || c2.length <= 8) {
  alert("La contraseña debe tener al menos 8 caracteres");
  return false;
}

if (c1 != c2) {
  alert("Las contraseñas deben de coincidir");
  return false;
} else {
  alert("Contraseña verificada");
  return true; 
}
}
