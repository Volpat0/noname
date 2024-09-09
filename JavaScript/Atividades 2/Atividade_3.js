var base = prompt("Digite a base: ");
var expoente = prompt("Digite o expoente: ");

function calcularPotencia(){
    if(expoente > 0){
        var resultado = base ** expoente;
    }
    alert("Resultado: "+resultado);
}
calcularPotencia();