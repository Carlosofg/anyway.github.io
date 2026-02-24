function mostrarAlerta(mensaje) {
    let alerta = document.getElementById("alerta");

    if (!alerta) {
        alerta = document.createElement("div");
        alerta.id = "alerta";
        alerta.className = "alerta";
        document.body.appendChild(alerta);
    }

    alerta.textContent = mensaje;
    alerta.classList.add("mostrar");

    setTimeout(() => {
        alerta.classList.remove("mostrar");
    }, 2000);
}

export { mostrarAlerta };