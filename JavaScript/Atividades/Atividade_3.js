var string = prompt("Digite uma palavra: ");
var caracter = prompt("Digite uma letra: ");
var quantidade = 0;
function contarOcorrencias(){
    for(let i = 0; i < string.length; i ++){
        if(string[i] === caracter){
            quantidade ++;
        }
    }
    alert("A letra "+caracter+" aparece "+quantidade+" vezes");
}
contarOcorrencias();