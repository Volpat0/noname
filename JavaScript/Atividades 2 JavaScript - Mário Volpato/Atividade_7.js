var minutos = prompt("Digite os minutos: ");

function converterMinutos(){
    let horas = Math.floor(minutos / 60);
    let minutosRestantes = minutos % 60;

    alert(+horas+" Horas e "+minutosRestantes+" minutos");
}
converterMinutos();