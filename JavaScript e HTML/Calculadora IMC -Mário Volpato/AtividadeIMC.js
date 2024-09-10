console.log(document);

function calcularImc(){
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;

    var imc = peso/(altura**2);

    var resultado = document.getElementById('meuParagrafo');
    resultado.innerText = 'Valor do IMC: '+ imc;

    var pesoMengasem = document.getElementById('segundoParagrafo');
    if(imc < 18.5){
        pesoMengasem.innerText = 'Abaixo do peso.';
        pesoMengasem.style.color = 'yellow';
    }
    if(imc >= 18.5 && imc <= 24.9){
        pesoMengasem.innerText = 'Peso ideal.';
        pesoMengasem.style.color = 'green';
    }
    if(imc >24.9){
        pesoMengasem.innerText = 'Acima do peso.';
        pesoMengasem.style.color = 'red';
    }

}