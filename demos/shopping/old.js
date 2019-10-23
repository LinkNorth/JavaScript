const form = document.querySelector('form');
const ul = document.querySelector('ul');
const itemNameInput = document.querySelector('.name');
const itemAmountInput = document.querySelector('.amount');
const searchInput = document.querySelector('.search');

searchInput.addEventListener('input', function(e) {
  let search = searchInput.value;
  console.log("SEACH", search);
  let allItems = document.querySelectorAll('li');
  for (let listItem of allItems) {
    listItem.style.display = "block";
    let nameSpan = listItem.querySelector('.name');
    let name = nameSpan.textContent;
    let found = name.toLowerCase().indexOf(search.toLowerCase());
    if (found === -1) {
      listItem.style.display = "none";
    }
  }
});


form.addEventListener('submit', function(e) {
  e.preventDefault();
  let name = itemNameInput.value;
  itemNameInput.value = "";
  let amount = itemAmountInput.value;
  amount = parseInt(amount);
  itemAmountInput.value = "";

  let allItems = document.querySelectorAll('li');
  for (let listItem of allItems) {
    let nameSpan = listItem.querySelector('.name');
    let amountSpan = listItem.querySelector('.amount');

    if (nameSpan.textContent === name) {
      amountSpan.textContent = parseInt(amountSpan.textContent) + amount;
      return;
    }
  }

  let li = document.createElement('li');
  let nameSpan = document.createElement('span');
  nameSpan.textContent = name;
  nameSpan.className = "name";
  let amountSpan = document.createElement('span');
  amountSpan.textContent = amount;
  amountSpan.className = "amount";
  li.appendChild(nameSpan);
  li.appendChild(amountSpan);

  let deleteButton = document.createElement('button');

  let span = document.createElement('span');
  span.textContent = 'Ta bort';
  deleteButton.appendChild(span);


  deleteButton.addEventListener('click', deleteItem);

  li.appendChild(deleteButton);

  ul.appendChild(li);
});

function deleteItem(e) {
  let button = this;
  let li = button.parentElement;
  ul.removeChild(li);
}


