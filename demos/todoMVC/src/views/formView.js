export default {
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
