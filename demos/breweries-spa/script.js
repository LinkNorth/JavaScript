const BASE_URL = 'https://api.openbrewerydb.org/breweries';
let page = 1;

function createBreweryRow(brewery) {
  let div = document.createElement('div');
  let title = document.createElement('h2');
  title.textContent = brewery.name;

  let type = document.createElement('p');
  type.textContent = `Brewery Type: ${brewery.brewery_type}`;

  let gotoButton = document.createElement('button');
  gotoButton.textContent = 'See more';
  gotoButton.addEventListener('click', function() {
    window.location.hash = brewery.id;
    getBrewery(brewery.id);
  });

  div.appendChild(title);
  div.appendChild(type);
  div.appendChild(gotoButton);

  return div;
}

function createPaginationElement() {
  let paginationDiv = document.createElement('div');
  paginationDiv.className = "pagination";
  let nextButton = document.createElement('button');
  let prevButton = document.createElement('button');

  nextButton.textContent = "Next";
  prevButton.textContent = "Prev";

  paginationDiv.appendChild(prevButton);
  paginationDiv.appendChild(nextButton);

  prevButton.addEventListener('click', () => {
    if (page > 1) {
      page -= 1;
      getBreweries(page);
    }
  });

  nextButton.addEventListener('click', () => {
    page += 1;
    getBreweries(page);
  });

  return paginationDiv;
}

function renderBreweries(breweries) {
  const breweriesContainer = document.querySelector('.breweries-container');
  breweriesContainer.innerHTML = "";

  if (breweries) {
    for (let brewery of breweries) {
      let breweryRow = createBreweryRow(brewery);
      breweriesContainer.appendChild(breweryRow);
    }
  }

  let pagination = createPaginationElement();
  breweriesContainer.appendChild(pagination);
}

function createBreweryInfoPElement(label, value) {
  const p = document.createElement('p');
  const labelSpan = document.createElement('span');
  const valueSpan = document.createElement('span');

  labelSpan.textContent = label;
  valueSpan.textContent = value;

  p.appendChild(labelSpan);
  p.appendChild(valueSpan);
  return p;
}

function createBreweryInfoElement(brewery) {
  const container = document.createElement('div');
  container.className = 'brewery-container';

  const title = document.createElement('h2');
  title.textContent = brewery.name;

  container.appendChild(title);

  container.appendChild(
    createBreweryInfoPElement('Brewery Type', brewery.brewery_type)
  );

  container.appendChild(
    createBreweryInfoPElement('Street', brewery.street)
  );

  container.appendChild(
    createBreweryInfoPElement('City', brewery.city)
  );

  container.appendChild(
    createBreweryInfoPElement('State', brewery.state)
  );

  container.appendChild(
    createBreweryInfoPElement('Country', brewery.country)
  );

  container.appendChild(
    createBreweryInfoPElement('Phone', brewery.phone)
  );

  let urlP = document.createElement('p');
  let urlLabelSpan = document.createElement('span');
  let urlValueSpan = document.createElement('span');

  urlLabelSpan.textContent = 'Homepage';
  let urlA = document.createElement('a');
  urlA.textContent = brewery.website_url;
  urlA.setAttribute('href', brewery.website_url);
  urlA.setAttribute('target', '_blank');
  urlValueSpan.appendChild(urlA);

  urlP.appendChild(urlLabelSpan);
  urlP.appendChild(urlValueSpan);

  container.appendChild(urlP);

  return container;
}

function renderBrewery(brewery) {
  const breweriesContainer = document.querySelector('.breweries-container');
  breweriesContainer.innerHTML = "";

  if (brewery) {
    let infoElement = createBreweryInfoElement(brewery);
    breweriesContainer.appendChild(infoElement);
  }
}

function getBreweries(page) {
  let url = BASE_URL;
  if (page) {
    url += `?page=${page}`;
  }

  axios.get(url)
    .then(response => {
      const breweries = response.data;
      renderBreweries(breweries);
    });
}

function getBrewery(id) {
  axios.get(`${BASE_URL}/${id}`)
    .then(response => {
      let brewery = response.data;
      renderBrewery(brewery);
    });
}

let breweryId = window.location.hash;
if (breweryId) {
  breweryId = breweryId.substring(1);
  getBrewery(breweryId);
} else {
  renderBreweries();
  getBreweries();
}




