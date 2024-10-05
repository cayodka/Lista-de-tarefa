let BotaoAdd =  document.getElementById('buttonAdd');
let Input = document.getElementById('inputTarefas')
let Tarefas = document.getElementById('tarefas')
let marcado = false;
 const dataAtual = new Date().toISOString().split('T')[0];
 const sino1 = new Audio('./sino1.mp3')
const sino2 = new Audio('./sino2.mp3')

BotaoAdd.addEventListener('click', function(){
   
    if(Input.value !=''){
        var tarefa = document.createElement('p');
        tarefa.innerText = `${dataAtual} | ${Input.value}`;
        Tarefas.appendChild(tarefa);
        Input.value = '';
        tarefa.addEventListener('click', function(){
            if (marcado == false) {
                tarefa.style.textDecoration = 'line-through';
                marcado = true;
                sino1.play();
            }
            else{
                tarefa.style.textDecoration = '';
                marcado = false;
            }
        })
        tarefa.addEventListener('dblclick', function(){
            Tarefas.removeChild(tarefa);
            sino2.play();
        })
    }
})