//variables de los campos
var nombre =document.getElementById("nombre");
var apellido =document.getElementById("apellido");
var genero =document.getElementById("genero");
var ci =document.getElementById("ci");
var telefono =document.getElementById("telefono");
var correo =document.getElementById("correo");
var error = document.getElementById("error");

//mensaje de error
error.style.color = "white";
error.style.background="rgba(211, 10, 10, 0.801)";
error.style.font ="bold";
error.style.fontFamily="monospace";
var envio = true;
//expresiones para validar los campos
vcor =/\w+@\w+\.+[a-z]/;
vnum=/^[0-9]+$/

vtel=/^[\+]?[(]?[0-9]{2}[)]?[-\s\.]?[0-9]{4}[-\s\.]?[0-9]{4,8}$/
vnom= /^[a-z][a-z]*/




function guardar() {
  var mensaje = [];
  
  

  if (nombre.value === ""|| apellido.value === "" || genero.value === "" || ci.value === "" || telefono.value === "" || correo.value === "")
   {
    if (nombre.value === "" && apellido.value === "" && ci.value === "" && genero.value === "" && telefono.value === "" && correo.value === "") {
      mensaje.push(" todos los campos estan vacios <br>");
      envio =false;
    }
     else if (nombre.value === "") {
      mensaje.push(" campo nombre esta vacio <br>");
      envio =false;
    }

    else if ( telefono.value === "" ) {
      mensaje.push("campo telfono esta vacio <br>");
      envio =false;
    }
    

    else if ( correo.value === "") {
      mensaje.push("campo correo esta vacio <br>");
      envio =false;
    }
    else if ( ci.value === "") {
        mensaje.push("campo ci esta vacio <br>");
        envio =false;
      }
      else if ( apellido.value === "") {
        mensaje.push("campo apellido esta vacio <br>");
        envio =false;
      }
      else if ( genero.value === "") {
        mensaje.push("campo genero sin selecionar <br>");
        envio =false;
      }
    envio =false;
  }
  else
  {
      envio =true;
  }

  if ((telefono.value.length > 11 || telefono.value.length < 10) && telefono.value !=="" ) {
    mensaje.push("telefono ingreasado no es valido <br>");
    envio =false;
  }
  
  if( nombre.value.length >25)
  {
    mensaje.push("nombre ingreasado pasa longitud perimtida(25)<br>");
    envio =false;
  }
  if( apellido.value.length >25)
  {
    mensaje.push("apellido ingreasado pasa longitud perimtida(25)<br>");
    envio =false;
  }

  if ((!vcor.test(correo.value))&& correo.value !=="") {
    mensaje.push("correo no valido <br>");
    envio =false;
  }
  if ((!vnum.test(ci.value))&& ci.value !=="") {
    mensaje.push("ci no valida solo numeros <br>");
    envio =false;
  }
  if ((!vtel.test(telefono.value))&& telefono.value !=="") {
    mensaje.push("telefono solo numeros <br>");
    envio =false;
  }

  error.innerHTML = mensaje.join(" ");
  if(envio===true)
  {
      alert("usuario registrado");
  }
  return envio;
}

function limpiar()
{
    nombre.value= null;
    apellido.value =null;
    genero.value =null;
    ci.value =null;
    telefono.value = null;
    correo.value =nul;


}