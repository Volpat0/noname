var numero = prompt("Digite um número: ");
function raizQuadradaInteira(){
    if(numero < 0){
        alert("O número não pode ser menor que 0.");
    }
    if(numero === 0){
        alert("Resposta: 0");
    }
    let raiz = 1;
    while(raiz * raiz <= numero){
        raiz++;
    }
    raiz = raiz - 1;
    alert("A raiz quadrada de "+numero+" é "+raiz);
    }
raizQuadradaInteira();