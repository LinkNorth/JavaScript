let fruits = [ "Açaí", "Akee", "Apple", "Apricot", "Avocado", "Banana", "Bilberry", "Blackberry", "Blackcurrant", "Black sapote", "Blueberry", "Boysenberry", "Buddha's hand", "Crab apples", "Currant", "Cherry", "Cherimoya", "Chico fruit", "Cloudberry", "Coconut", "Cranberry", "Cucumber", "Damson", "Date", "Dragonfruit", "Pitaya", "Durian", "Elderberry", "Feijoa", "Fig", "Goji berry", "Gooseberry", "Grape", "Grapefruit", "Guava", "Honeyberry", "Huckleberry", "Jabuticaba", "Jackfruit", "Jambul", "Japanese plum", "Jostaberry", "Jujube", "Juniper berry", "Kiwano", "Kiwifruit", "Kumquat", "Lemon", "Lime", "Loganberry", "Loquat", "Longan", "Lychee", "Mango", "Mangosteen", "Marionberry", "Melon", "Miracle fruit", "Mulberry", "Nectarine", "Nance", "Orange", "Papaya", "Passionfruit", "Peach", "Pear", "Persimmon", "Plantain", "Plum", "Pineapple", "Pineberry", "Plumcot", "Pomegranate", "Pomelo", "Purple mangosteen", "Quince", "Raspberry", "Rambutan", "Redcurrant", "Salal", "Salak", "Satsuma", "Soursop", "Star apple", "Star fruit", "Strawberry", "Surinam cherry", "Tamarillo", "Tamarind", "Tayberry", "Ugli fruit", "White currant", "White sapote", "Yuzu" ];


const ol = document.querySelector('ol');
let currentPage = 0;
let amount = 20;
let maxPage = Math.ceil(fruits.length / amount);

function renderPage(page) {
  ol.innerHTML = "";
  let start = page * amount;
  ol.setAttribute('start', start + 1);
  let end = Math.min(fruits.length, (page + 1) * amount);
  for (let i = start; i < end; i += 1) {
    let fruit = fruits[i];
    let li = document.createElement('li');
    li.textContent = fruit;
    ol.appendChild(li);
  }
}

renderPage(currentPage);

let prev = document.querySelector("#prev");
let next = document.querySelector("#next");

next.addEventListener('click', function() {
  if (currentPage >= maxPage - 1) return;
  currentPage += 1;
  renderPage(currentPage);
});

prev.addEventListener('click', function() {
  if (currentPage <= 0) return;
  currentPage -= 1;
  renderPage(currentPage);
});
