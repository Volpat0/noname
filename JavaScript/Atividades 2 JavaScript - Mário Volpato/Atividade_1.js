var ano = prompt("Digite o ano: ");
function verificarAnoBissexto(){
    if(ano%4 == 0){
        alert("Ano bissexto.");
    }else{
        alert("Ano não bissexto.");
   }
}
verificarAnoBissexto();