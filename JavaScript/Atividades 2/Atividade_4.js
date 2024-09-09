var numero = prompt("Digite um número inteiro: ");
let soma = 0;
let resultado = 0;
function somaDigitos(){
    for(let i = 0; i < numero.length; i++){
        if(!isNaN(numero[i]) && numero[i] !== ' '){
            let digito = parseInt(numero[i],10);
            soma += digito;
        }
    }
    alert("Resultado: "+soma);
    
}
somaDigitos();