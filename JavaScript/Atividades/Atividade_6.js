var numero = Number(prompt("Digite um número: "));
var contador = 0;
var somador = 0;
function somaAte(){
    while(contador <= numero){
        somador = somador + contador;
        contador ++;
    }
    alert("Resultado: "+somador);
}
somaAte();