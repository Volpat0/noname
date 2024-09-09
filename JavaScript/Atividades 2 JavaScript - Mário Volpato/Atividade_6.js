var string = prompt("Digite uma palavra: ");
var vezes = prompt("Digite quantas vezes vai repetir: ");

function repetirString(){
    if(string != ' ' && vezes != ' '){
        alert("Palavra repetida: "+string.repeat(vezes));
    }
}
repetirString();