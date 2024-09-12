
var tarefa = document.getElementById('tarefa');
var addTarefa = document.getElementById('addTarefa');
var ulLista = document.getElementById('tarefas');

function adicionarTarefa(){
    var valorTarefa = tarefa.value;
    if(valorTarefa.trim() !== ""){
        var novaTarefa = document.createElement("li");
        novaTarefa.innerHTML = `${valorTarefa}
        <button class ="concluir" style="background-color: green;color: #fff;border: none;padding: 5px 5px;border-radius: 5px;cursor: pointer;font-size: 16px;">Concluir</button>
        <button class ="excluir"  style="background-color: red;color: #fff;border: none;padding: 5px 5px;border-radius: 5px;cursor: pointer;font-size: 16px;">Remover</button>`;//Adicionar botão ao lado da tarefa adicionada
        
        var btnConcluir = novaTarefa.querySelector(".concluir");
        var btnExcluir = novaTarefa.querySelector(".excluir");
        
        btnConcluir.addEventListener("click", function() {
            concluirTarefa(novaTarefa);
        });

        btnExcluir.addEventListener("click", function() {
            excluirTarefa(novaTarefa);
        });
        
        ulLista.appendChild(novaTarefa);
        tarefa.value = "";
    }
}
function excluirTarefa(tarefaElement){
    ulLista.removeChild(tarefaElement);
}
function concluirTarefa(tarefaElement){
    tarefaElement.style.textDecoration = "line-through";

}
