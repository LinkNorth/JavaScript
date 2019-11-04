let thead = document.querySelector('table thead');
let tbody = document.querySelector('table tbody');
let url = "https://api.openbrewerydb.org/breweries";

function getAddress(brewery) {
  return brewery.street + ' - ' + brewery.city;
}

function render(breweries) {
  let keys = Object.keys(breweries[0]);
  
  let headerRow = document.createElement('tr');
  for (let key of keys) {
    let th = document.createElement('th');
    th.textContent = key;
    headerRow.appendChild(th);
  }

  thead.appendChild(headerRow);


  console.log(keys);
  for (let brewery of breweries) {
    let tr = document.createElement('tr');

    for (let key of keys) {
      let td = document.createElement('td');
      td.textContent = brewery[key];
      tr.appendChild(td);
    }

    tbody.appendChild(tr);
  }
}

function onLoad() {
  if (this.status === 200) {
    let json = this.responseText;
    let data = JSON.parse(json);
    console.log(data);
    render(data);
  } else {
    console.error('Oh noes', this);
  }
}

let request = new XMLHttpRequest();
request.addEventListener('load', onLoad);
request.open('GET', url);
request.send();
