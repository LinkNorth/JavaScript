export default {
  render: function() {
    const header = document.createElement('header');

    const title = document.createElement('h1');
    title.textContent = 'Min fina TODO App';

    header.appendChild(title);

    return header;
  }
};
