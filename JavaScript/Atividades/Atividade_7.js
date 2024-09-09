var min = 1;
var max = 10;
function adivinheNumero(){
    var numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    //alert(+numeroAleatorio);
    var chute = prompt("Digite um número aleatório de 1-10: ");
    while(chute != numeroAleatorio){
        alert("Número errado!");
        chute = prompt("Digite um número aleatório de 1-10: ");
    }
    if(chute == numeroAleatorio){
        alert("Parabéns! Você adivinhou o número.");
    }
}
adivinheNumero();