let Usuario = {
    nombre: "Carlos",
    usuario: "carlos12",
    contrasena: 132
};

let inputUsuario = document.getElementById("user");
let inputContrasena = document.getElementById("password");


function openMenu(){

    window.location.href = "menu.html";
    window.alert("Accediste correctamente");
}

function login(inputUsuario,inputContrasena){

    if (inputUsuario.value !== Usuario.usuario){
        alert("Usuario o contraseña incorrectos");
    }
    else if( inputUsuario.value === Usuario.usuario && inputContrasena.value != Usuario.contrasena){
        alert("Contraseña incorrecta");
    }
    else{
        openMenu(inputUsuario, inputContrasena);
    }
}

setInterval(() => {
    let hora = new Date().toLocaleTimeString("es-AR");
    let eHora = document.getElementById("horaActual");
    eHora.innerText = hora;
},100);