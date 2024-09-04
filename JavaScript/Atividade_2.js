var num1 = Number(prompt('Digite um número: '));
var num2 = Number(prompt('Digite outro número: '));
var operacao = prompt('Digite a operação: ');
var resultado;

function calculadora(){
    switch(operacao){
        case '+' :{
            resultado = num1 + num2;
            alert('O resultado é : '+resultado);
            break;
        }
        case '-' :{
            resultado = num1 - num2;
            alert('O resultado é : '+resultado);
            break;
        }
        case '/' :{
            resultado = num1 / num2;
            alert('O resultado é : '+resultado);
            break;
        }
        case '*' :{
            resultado = num1 * num2;
            alert('O resultado é : '+resultado);
            break;
        }
    }
}
calculadora();