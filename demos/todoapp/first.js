const form = document.querySelector('form');
const input  = document.querySelector('input');
const ul = document.querySelector('ul');

let todos = [];


form.addEventListener('submit', function(e) {
  e.preventDefault();
  let value = input.value;
  console.log(value);

  createTodo(value);

  input.value = "";
  //render(todos);
});

function fetchTodos() {
  let xhr = new XMLHttpRequest();
  xhr.addEventListener('load', function() {
    let data = JSON.parse(this.responseText);
    todos = data.data;
    render(todos);
  });
  xhr.open('GET', '/todos');
  xhr.send();
}

function createTodo(name) {
  let todo = {
    title: name,
  };


  let xhr = new XMLHttpRequest();

  xhr.open('POST', '/todos');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.addEventListener('load', function() {
    if (this.status === 201) {
      fetchTodos();
    } else {
      alert('Oops');
    }
  });
  let data = JSON.stringify(todo);
  xhr.send(data);
}

function removeTodo(id) {
  let xhr = new XMLHttpRequest();
  xhr.addEventListener('load', function() {
    fetchTodos();
  });
  xhr.open("DELETE", "/todos/" + id);
  xhr.send();
}

function updateTodo(id, newTitle) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', '/todos/' + id);
  xhr.send();
  xhr.addEventListener('load', function() {
    if (this.status !== 200) {
      alert('Oops');
      return;
    }
    let todo = JSON.parse(this.responseText).data;

    let xhr2 = new XMLHttpRequest();
    xhr2.open('PUT', '/todos/' + id);
    xhr2.setRequestHeader('Content-Type', 'application/json');
    todo.title = newTitle;
    xhr2.send(JSON.stringify(todo));
    xhr2.addEventListener('load', function() {
      fetchTodos();
    });
  });
}

function render(todos) {
  ul.innerHTML = "";
  for (let todo of todos) {
    let li = document.createElement('li');
    let titleSpan = document.createElement('span');
    let idSpan = document.createElement('span');
    let removeButton = document.createElement('button');
    let changeButton = document.createElement('button');
    idSpan.className = "id";

    let changeInput = document.createElement('input');
    changeInput.value = todo.title;

    titleSpan.appendChild(changeInput);
    idSpan.textContent = todo.id;
    removeButton.textContent = "Remove me";
    changeButton.textContent = "Change me";

    removeButton.addEventListener('click', function() {
      removeTodo(todo.id); 
    });

    changeButton.addEventListener('click', function() {
      let newValue = changeInput.value;
      if (newValue !== todo.title) {
        updateTodo(todo.id, newValue);
      }
    });

    li.appendChild(idSpan);
    li.appendChild(titleSpan);
    li.appendChild(changeButton);
    li.appendChild(removeButton);

    ul.appendChild(li);
  }
}

fetchTodos();
