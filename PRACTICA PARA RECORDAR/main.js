import { mostrarAlerta } from "./assets/windows.js";

let Usuario = {
    nombre: "Carlos",
    usuario: "carlos",
    contrasena: 132
};

let inputUsuario = document.getElementById("user");
let inputContrasena = document.getElementById("password");
let btnEntrar = document.getElementById("btEntrar");
let rediLinkedin = document.getElementById("Linkedin");

function openMenu(){

    mostrarAlerta("Accediste correctamente");
    setTimeout(() => {
        window.location.href = "menu.html";
    },300)
}

function login(){

    if (inputUsuario.value !== Usuario.usuario){
        mostrarAlerta("Usuario o contraseña incorrectos");
    }
    else if(inputContrasena.value != Usuario.contrasena){
        mostrarAlerta("Has ingresado una contraseña incorrecta");
    }
    else{
        openMenu();
    }
}

btnEntrar.addEventListener("click",login);

setInterval(() => {
    let hora = new Date().toLocaleTimeString("es-AR");
    let eHora = document.getElementById("horaActual");
    eHora.innerText = hora;
},100);

function redirectLinkedin() {

    window.open("https://www.linkedin.com/in/carlos-guevara-392551363/");

}
rediLinkedin.addEventListener("click",redirectLinkedin);
