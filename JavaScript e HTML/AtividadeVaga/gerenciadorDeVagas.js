function saveToLocalStorage(key,value){
        localStorage.setItem(key,JSON.stringify(value)); 
}

function getFromLocalStorage(key){
    return JSON.parse(localStorage.getItem(key)) || [];
}

document.getElementById('cadastrarForm')?.addEventListener('submit',function(event){   
    event.preventDefault();
    const vaga = {
        placa: document.getElementById('placa').value,
        numeroApto: document.getElementById('numeroApto').value,
        bloco: document.getElementById('bloco').value,
        numeroVaga: document.getElementById('numeroVaga').value,
    };
    const reservas = getFromLocalStorage('reservas');
    reservas.push(vaga);
    saveToLocalStorage('reservas',reservas);
    alert('Vaga reservada com sucesso!');
    window.location.href = 'CadastraVeiculo.html';
});

document.getElementById('cadastroVeiculoForm')?.addEventListener('submit',function(event){
    event.preventDefault();
    const veiculo = {
        placa: document.getElementById('placa').value,
        nome: document.getElementById('nome').value,
        modelo : document.getElementById('modelo').value,
        cor: document.getElementById('cor').value,
    };
    const veiculos = getFromLocalStorage('veiculos');
    veiculos.push(veiculo);
    saveToLocalStorage('veiculos',veiculos);
    alert('Veículo cadastrado com sucesso!');

});

document.getElementById('listarVagas')?.addEventListener('click',function(){
    const vagas = getFromLocalStorage('reservas');
    var lista = document.getElementById('listaVagas');
    lista.innerHTML = '';
    vagas.forEach(vaga => {
        var item = document.createElement('li');
        item.innerHTML = `Placa: ${vaga.placa}, Apartamento: ${vaga.numeroApto}, Bloco: ${vaga.bloco}, Vaga: ${vaga.numeroVaga}
        <button class ="concluir" style="background-color: green;color: #fff;border: none;padding: 5px 5px;border-radius: 5px;cursor: pointer;font-size: 16px;">Concluir</button>
        <button class ="excluir"  style="background-color: red;color: #fff;border: none;padding: 5px 5px;border-radius: 5px;cursor: pointer;font-size: 16px;">Remover</button>`;
        
        var btnConcluir = item.querySelector(".concluir");
        var btnExcluir = item.querySelector(".excluir");
        
        btnConcluir.addEventListener("click", function() {
            concluirVaga(item);
        });

        btnExcluir.addEventListener("click", function() {
            excluirVaga(item);
        });
        
        lista.appendChild(item);
    });
    function excluirVaga(itemElement){
        lista.removeChild(itemElement);
    }
    function concluirVaga(itemElement){
        itemElement.style.textDecoration = "line-through";
    
    }
        lista.appendChild(item);
        item.value = "";
    });

document.getElementById('listarCarros')?.addEventListener('click',function(){
    const vagas = getFromLocalStorage('veiculos');
    var lista = document.getElementById('listaVagas');
    lista.innerHTML = '';
    vagas.forEach(vaga => {
        var item = document.createElement('li');
        item.innerHTML = `Carro cadastrado: Placa: ${vaga.placa}, Nome: ${vaga.nome}, Modelo: ${vaga.modelo}, Cor: ${vaga.cor}  
        <button class ="concluir" style="background-color: green;color: #fff;border: none;padding: 5px 5px;border-radius: 5px;cursor: pointer;font-size: 16px;">Concluir</button>
        <button class ="excluir"  style="background-color: red;color: #fff;border: none;padding: 5px 5px;border-radius: 5px;cursor: pointer;font-size: 16px;">Remover</button>`;
        
        var btnConcluir = item.querySelector(".concluir");
        var btnExcluir = item.querySelector(".excluir");
        
        btnConcluir.addEventListener("click", function() {
            concluirCarro(item);
        });

        btnExcluir.addEventListener("click", function() {
            excluirCarro(item);
        });
        
        lista.appendChild(item);
        item.value = "";
    });
    function excluirCarro(itemElement){
        lista.removeChild(itemElement);
    }
    function concluirCarro(itemElement){
        itemElement.style.textDecoration = "line-through";
    
    }
});
function consultarVagas(){
    window.location.href = 'ConsultarVaga.html';
}
