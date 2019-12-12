import todoView from './todoView';
export default {
  render: function(todos) {
    const ul = document.createElement('ul');

    for (let todo of todos) {
      let todoEl = todoView.render(todo);
      ul.appendChild(todoEl);
    }

    return ul;
  }
};
