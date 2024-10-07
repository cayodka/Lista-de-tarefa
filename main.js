let BotaoAdd = document.getElementById('buttonAdd');
let Input = document.getElementById('inputTarefas');
let Tarefas = document.getElementById('tarefas');
const dataAtual = new Date().toISOString().split('T')[0];
const sino1 = new Audio('./sino1.mp3');
const sino2 = new Audio('./sino2.mp3');

function adicionarTarefa() {
    if (Input.value != '') {
        var tarefa = document.createElement('p');
        var checkbox = document.createElement('input');
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("id", "checkbox");
        var buttondel = document.createElement('button');
        buttondel.innerText = 'X'; 
        buttondel.setAttribute("id", "buttondel");

        tarefa.innerText = `${dataAtual} | ${Input.value} `;
        tarefa.prepend(checkbox); 
        tarefa.appendChild(buttondel);
        Tarefas.appendChild(tarefa);
        Input.value = '';

        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                tarefa.style.textDecoration = 'line-through';
                sino1.play();
            } else {
                tarefa.style.textDecoration = '';
            }
        });

        buttondel.addEventListener('click', function() {
            Tarefas.removeChild(tarefa);
            sino2.play();
        });

        tarefa.addEventListener('mouseenter', function() {
            buttondel.style.visibility = 'visible';
        });

        tarefa.addEventListener('mouseleave', function() {
            buttondel.style.visibility = 'hidden';
        });

        
        tarefa.addEventListener('mouseenter', function() {
            checkbox.style.visibility = 'visible';
        });

        tarefa.addEventListener('mouseleave', function() {
            checkbox.style.visibility = 'hidden';
        });
        
    }
}

BotaoAdd.addEventListener('click', adicionarTarefa);

Input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        adicionarTarefa();
    }
});
