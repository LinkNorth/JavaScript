// Do not touch these functions
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function getNumbers() {
  let numbers = [];
  let missing = Math.round(Math.random() * 99);
  for (let i = 0; i < 100; i += 1) {
    if (i === missing) continue;
    numbers.push(i);
  }
  shuffle(numbers);
  return numbers;
}


// Implement solution here
let numbers = getNumbers();
