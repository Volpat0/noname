
function verificarParImpar(){
    let numero = prompt('Digite um número: ');

    if((numero%2) != 0){
        alert('O número ' + numero +" é impar");
    }
    else if((numero%2) == 0){
        alert('O número ' + numero +' é par');
    }
}
verificarParImpar();