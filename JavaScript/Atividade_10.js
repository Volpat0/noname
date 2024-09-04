var inicio = Number(prompt("Digite um número de início: "));
var fim = Number(prompt("Digite um número de fim: "));
function contarPares(){
    let contador = 0;
    for(let num = inicio; num <= fim; num++){
        if(num % 2 === 0){
            contador++
        }
    }
    alert("Quantidade de números pares entre "+inicio+" e "+fim+" : "+contador);

}
contarPares();