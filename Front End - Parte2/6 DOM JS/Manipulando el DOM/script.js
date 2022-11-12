import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

const btn = document.querySelector('[data-form-btn]');
//Cree el const junto con la arrow function
const createTask = (evento) =>{
  evento.preventDefault();
  const input = document.querySelector('[data-form-input]');
  const value = input.value;
  const list = document.querySelector('[data-list]');
  const task = document.createElement('li');
  task.classList.add('card')
  input.value = '';
  //backticks
  const taskContent = document.createElement('div');
  const titleTask = document.createElement('span');
  titleTask.classList.add('task');
  titleTask.innerText = value;  
  taskContent.appendChild(checkComplete());
  taskContent.appendChild(titleTask);
  //task.innerHTML = content;
  task.appendChild(taskContent);
  list.appendChild(task); //Agregando un hijo al elemto list, es decir 'task' al 'list' 
  task.appendChild(deleteIcon());
}
//Evento que llama a la arrow function
btn.addEventListener('click', createTask)

