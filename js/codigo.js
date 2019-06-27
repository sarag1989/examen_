/* Autor: Sara Gharafi Abalkais
Version:1.00
*/
// todo el código innecesario hay que quitarlo en la version final, solo te puedes quedar con los COMENTARIOS aclarativos.

function validarFormulario() {
	if (!validarNombre()) {
		return false;
	}
	if (!validarEmail()) {
		return false;
	}
	if (!validarEdad()) {
		return false;
	}
	return true;
}

let nombre = document.getElementById("nametxt");
let correo = document.getElementById("emailtxt");
let edad = document.getElementById("edadnum");

function validarNombre() {
  if (nombre.value === null ||nombre.value === "" ||nombre.value.length > 20 ||/\d+/.test(nombre.value)) {
    //nombre.value === null es necesario con un prompt por ejemplo para que el usuario no le pueda dar a ESC y escaquearse de rellenar la caja en un formulario no se da ese caso.
    //nombre.value === "" se puede indicar desde el HTML con requiered y ponerle un * con un sub por ejemplo para que quede mas bonito.
    //es mejor comprobar la longitud de la cadena desde HTML con maxlength.
    nombre.className = "mal";
    return false;
  } else {
    nombre.className = "bien";
    return true;
  }
}

function validarEmail() {
  if (correo.value === null ||correo.value === "") {
    correo.className = "mal";
    return false;
  } else if (/\w+@\w+\.+[a-z]/.test(correo.value)) {
    correo.className = "bien";
    return true;
  }
}

function validarEdad() {
  if (edad.value === null ||edad.value === "" ||edad.value<18 ||edad.value>120) {
      edad.className = "mal";
      return false;
  } else {
    edad.className = "bien";
    return true;
  }
}