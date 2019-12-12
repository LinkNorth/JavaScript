import headerView from './headerView';
import formView from './formView';
import todoListView from './todoListView';

export default {
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
