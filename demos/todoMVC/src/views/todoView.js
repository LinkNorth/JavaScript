export default {
  render: function(todo) {
    const li = document.createElement('li');

    li.textContent = todo.title;

    return li;
  }
};
