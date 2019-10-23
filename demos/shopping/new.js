const form = document.querySelector('form');
const ul = document.querySelector('ul');
const itemNameInput = document.querySelector('.name');
const itemAmountInput = document.querySelector('.amount');
const searchInput = document.querySelector('.search');
let items = [];

function render() {
  ul.innerHTML = "";
  for (let listItem of items) {
    if (listItem.show === false) continue;
    let li = document.createElement('li');
    let nameSpan = document.createElement('span');
    nameSpan.textContent = listItem.name;
    nameSpan.className = "name";
    let amountSpan = document.createElement('span');
    amountSpan.textContent = listItem.amount;
    amountSpan.className = "amount";
    li.appendChild(nameSpan);
    li.appendChild(amountSpan);

    let deleteButton = document.createElement('button');

    let span = document.createElement('span');
    span.textContent = 'Ta bort';
    deleteButton.appendChild(span);


    deleteButton.addEventListener('click', function() {
      let index = items.findIndex(function(value) {
        return value.name === listItem.name;
      });
      items.splice(index, 1);
      render();
    });

    li.appendChild(deleteButton);

    ul.appendChild(li);
  }
}


searchInput.addEventListener('input', function(e) {
  let search = searchInput.value;
  console.log("SEACH", search);
  for (let listItem of items) {
    listItem.show = true;
    let name = listItem.name
    let found = name.toLowerCase().indexOf(search.toLowerCase());
    if (found === -1) {
      listItem.show = false;
    }
  }
  render();
});


form.addEventListener('submit', function(e) {
  e.preventDefault();
  let name = itemNameInput.value;
  itemNameInput.value = "";
  let amount = itemAmountInput.value;
  amount = parseInt(amount);
  itemAmountInput.value = "";

  console.log(items);

  let allItems = document.querySelectorAll('li');
  for (let listItem of items) {
    if (listItem.name === name) {
      listItem.amount += amount;
      render();
      return;
    }
  }

  let shoppingItem = {
    name: name,
    amount: amount,
    show: true,
  };
  items.push(shoppingItem);

  render();
});



