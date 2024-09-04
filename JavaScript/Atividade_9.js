var string = prompt("Digite uma palavra: ");
function inverterString(){
    let invertida = string.split('').reverse().join('');
    alert("Palava invertida: "+invertida);
}
inverterString();