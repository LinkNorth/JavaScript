import appView from '../views/appView';
import todoModel from '../models/todoModel';
export default {
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
}
