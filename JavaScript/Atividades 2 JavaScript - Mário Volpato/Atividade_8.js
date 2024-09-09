var notas = prompt("Digite suas notas: ");
var pesos = prompt("Digite os pesos: ");

function calcularMediaPonderada(){
    let somaPonderada = 0;
    let somaPesos = 0;
    for(let i = 0; i < notas.length; i++){
        somaPonderada += notas[i] * pesos[i];
        somaPesos += pesos[i];
    }
    let mediaPonderada = somaPonderada / somaPesos;

    alert("A média Ponderada é: "+mediaPonderada);
}
calcularMediaPonderada();