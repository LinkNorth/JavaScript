export default {
  todos: [
    {title: 'Build todo app'},
    {title: 'Explain todo app'}
  ],
  addTodo: function(title) {
    this.todos.push({title: title});
  }
};
