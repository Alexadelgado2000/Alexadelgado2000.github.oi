// VDY.js
function validarFecha() {
    const fechaInicio = document.getElementById("fechaInicio").value;
    const fechaCorrecta = "2024-10-18";
    if (fechaInicio === fechaCorrecta) {
        document.getElementById("pregunta1").classList.add("hidden");
        document.getElementById("pregunta2").classList.remove("hidden");
    } else {
        alert("Intenta de nuevo, mi amor");
    }
}

function validarApodo() {
    const apodo = document.getElementById("apodo").value.toLowerCase();
    const apodoCorrecto = "pollito";
    if (apodo === apodoCorrecto) {
        document.getElementById("pregunta2").classList.add("hidden");
        document.getElementById("pregunta3").classList.remove("hidden");
    } else {
        alert("Intenta de nuevo, mi amor");
    }
}

function validarBeso() {
    const primerBeso = document.getElementById("primerBeso").value;
    const besoCorrecto = "2024-06-01";
    if (primerBeso === besoCorrecto) {
        document.getElementById("pregunta3").classList.add("hidden");
        document.getElementById("mensaje").classList.remove("hidden");
        document.getElementById("carta").classList.remove("hidden");
    } else {
        alert("Intenta de nuevo, mi amor");
    }
}

function actualizarCuentaRegresiva() {
    const fechaAniversario = new Date("2025-02-18").getTime();
    setInterval(() => {
        const ahora = new Date().getTime();
        const diferencia = fechaAniversario - ahora;
        
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
        
        document.getElementById("countdown").innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
    }, 1000);

    if (diferencia < 0) {
        document.getElementById("countdown").innerHTML = "¡Feliz aniversario, amor! 🎉💖";
        return;
    }
    
}
actualizarCuentaRegresiva();

function playAudio() {
    document.getElementById("musicPlayer").play();
}
