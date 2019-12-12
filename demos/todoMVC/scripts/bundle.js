(function () {
  'use strict';

  var headerView = {
    render: function() {
      const header = document.createElement('header');

      const title = document.createElement('h1');
      title.textContent = 'Min fina TODO App';

      header.appendChild(title);

      return header;
    }
  };

  var formView = {
    render: function(options) {
      const form = document.createElement('form');

      const input = document.createElement('input');

      form.appendChild(input);

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        let title = input.value;
        options.onSubmit(title);
      });


      return form;
    }
  };

  var todoView = {
    render: function(todo) {
      const li = document.createElement('li');

      li.textContent = todo.title;

      return li;
    }
  };

  var todoListView = {
    render: function(todos) {
      const ul = document.createElement('ul');

      for (let todo of todos) {
        let todoEl = todoView.render(todo);
        ul.appendChild(todoEl);
      }

      return ul;
    }
  };

  var appView = {
    render: function(todos, options) {
      const app = document.querySelector('#app');
      app.innerHTML = "";


      app.appendChild(headerView.render());

      const main = document.createElement('main');
      
      app.appendChild(main);
      main.appendChild(formView.render(options));
      main.appendChild(todoListView.render(todos));

    },
  };

  var todoModel = {
    todos: [
      {title: 'Build todo app'},
      {title: 'Explain todo app'}
    ],
    addTodo: function(title) {
      this.todos.push({title: title});
    }
  };

  var todoController = {
    init: function() {
      this.onSubmit = this.onSubmit.bind(this);
      this.render();
    },
    render: function() {
      appView.render(todoModel.todos, {
        onSubmit: this.onSubmit,
      });
    },
    onSubmit: function(title) {
      todoModel.addTodo(title);

      this.render();
    }
  };

  todoController.init();

}());
