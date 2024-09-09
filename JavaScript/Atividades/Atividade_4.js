var n = prompt("Digite um número: ");
function fibonacci(){
    const fibonacci = [0,1];
    for(let i = 2; i < n; i++){
        fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
    }
    
    alert("Sequencia de fibonacci de até "+n+" termos: "+fibonacci);

}
fibonacci();