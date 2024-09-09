var array = prompt("Digite um palindromo: ");
var palindromo;
var normal;
var invertido;
function verificarPalindromo(){
    normal = array.replace(/[^a-zA-Z0-9]/, '').toLowerCase();
    invertido = normal.split('').reverse().join('');
    if(normal === invertido){
        palindromo = true;
    }else{
        palindromo = false;
    }
    alert("É um palindromo? = "+palindromo);
}
verificarPalindromo();