var numero = Number(prompt("Digite um número: "));
 function gerarTabuada(){
    if(numero != 0 && numero != ' '){
        alert("Tabudada do "+numero+" : \n"
        +numero+" * 1 : "+numero *1+"\n"
        +numero+" * 2 : "+numero *2+"\n"
        +numero+" * 3 : "+numero *3+"\n"
        +numero+" * 4 : "+numero *4+"\n"
        +numero+" * 5 : "+numero *5+"\n"
        +numero+" * 6 : "+numero *6+"\n"
        +numero+" * 7 : "+numero *7+"\n"
        +numero+" * 8 : "+numero *8+"\n"
        +numero+" * 9 : "+numero *9+"\n"
        +numero+" * 10 : "+numero *10);
    }
 }
 gerarTabuada();