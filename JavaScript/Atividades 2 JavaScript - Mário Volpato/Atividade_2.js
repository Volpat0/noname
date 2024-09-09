var palavra = prompt("Digite uma palavra: ");
var contagem = 0;
function contarLetras(){ 
    var palavra2 = palavra.trim();
    for(let i = 0; i < palavra2.length; i++){
        contagem ++;
    }
    alert("Contagem de letras: "+contagem);
}
contarLetras();