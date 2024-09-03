var nome = 'Mário';
let idade = 8;

const CPF = '12345678910';

/*function exemploVar() {
    var b = 10;
    if(b < 20){
        var c = b + 20;
        console.log("Valor de b: ",b);
    }
    console.log("Valor de c: ",c);
    // var = se usar dentro do 'if', ele pode ler fora do 'if'
}
exemploVar();*/

function exemploLet(){
    let b = 10;
    b = 11;
    if(b < 20){
        let c = b + 20;
        console.log("Valor de b: ",b);
    }
    // let = se usar dentro do 'if', ele não pode ler fora do 'if'
}
exemploLet();

// pode usar o let pra tudo (sem precisar especificar o que é cada variável)
let ano = 1;
let preco = 1.5;
let sobrenome = "Volpato";
let maior18 = true;
let frutas = ['Bananas','Maça'];
let pessoa = {name: 'Volpato', idade: 22}
console.log(pessoa);
let hoje = new Date();
console.log(hoje);

let indefinido = undefined;
console.log(indefinido);
let nulo = null;
console.log(nulo);

//função declarada
function minhaFuncao(){

}
//função expressa
const minhaFuncaoExpressa = function() {

}
//funçao anônina
setInterval(function() {
    console.log("Olá");
},1000);
// função flecha
setInterval(()=> {
    cons
    ole.log('Olá arrow function');
},1000);

/*for(let index = 0; index < 10; index++){
    console.log("Olá");
}*/

/*let contado = 0;
while(contador < 10){
    console.log(contado);
    contado ++;
}*/

/*let contador = 0;
do{
    console.log(contador);
    contador ++;
}while(contador < 10);*/

/*let contador = 9;
if(contador >= 10){
    console.log("Olá");
}else if (contador > 5){
    console.log("Olá 2");
}else{
    console.log("Olá 3");
}*/

/*let fruta = 'Maça';
switch(fruta){
    case 'Banana': {
        console.log('Banana');
        break;
    }
    case 'Mamão' :{
        console.log('Mamão');
        break;
    }
    case 'Maça' : {
        console.log('Maça');
        break;
    }
}*/

//operadores lógicos
// > - maior
// < - menor
// >= - maior/igual
// <= - menor/igual
// != - diferente
// == - igual
// ! - negação
// && - and
// || - ou
// === - tipo de dado igual

// mostrar mensagens para o usuário
 alert("Olá mundo");

 let nome2 = prompt('Digite seu nome');
 alert('Olá, '+ nome2)