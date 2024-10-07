let BotaoAdd = document.getElementById('buttonAdd');
let Input = document.getElementById('inputTarefas');
let Tarefas = document.getElementById('tarefas');
const dataAtual = new Date().toISOString().split('T')[0];
const sino1 = new Audio('./sino1.mp3');
const sino2 = new Audio('./sino2.mp3');

BotaoAdd.addEventListener('click', function() {
    if (Input.value != '') {
        var tarefa = document.createElement('p');
        var buttondel = document.createElement('button');
        buttondel.innerText = 'X'; 
        buttondel.setAttribute("id", "buttondel");
        
        tarefa.innerText = `${dataAtual} | ${Input.value} `;
        tarefa.appendChild(buttondel); 
        Tarefas.appendChild(tarefa);
        Input.value = '';

        let marcado = false;

        tarefa.addEventListener('click', function() {
            if (!marcado) {
                tarefa.style.textDecoration = 'line-through';
                marcado = true;
                sino1.play();
            } else {
                tarefa.style.textDecoration = '';
                marcado = false;
            }
        });

        buttondel.addEventListener('click', function() {
            Tarefas.removeChild(tarefa);
            sino2.play();
        });
    }
});
