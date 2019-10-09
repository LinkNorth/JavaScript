let words = "hello banana fruit banana";

let countWords = words.split(" ").reduce(function(acc, word) {
  if (!acc[word]) acc[word] = 0;
  acc[word] += 1;
  return acc;
}, {});
console.log(countWords);

function reduce(array, func, defaultAcc) {
  let accumulator = defaultAcc;
  for (let i = 0; i < array.length; i += 1) {
    let value = array[i];
    accumulator = func(accumulator, value);
  }
  return accumulator;
}

function mapWithReduce(array, func) {
  return reduce(array, function(acc, x) {
    acc.push(func(x));
    return acc;
  }, []);
}

function filterWithReduce(array, func) {
  return reduce(array, function(acc, x) {
    if (func(x)) acc.push(x);
    return acc;
  }, []);
}

function filter(array, func) {
  let newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    let value = array[i];
    let keepValue = func(value);
    if (keepValue) {
      newArray.push(value);
    }
  }
  return newArray;
}

function map(array, func) {
  let newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    let value = array[i];
    let newValue = func(value);
    newArray.push(newValue);
  }
  return newArray;
}

function doubleNumber(value) {
  return value * 2;
}

console.log(doubleNumber(4)); // -> 8

map([10, 5, 13], function(value) {
  return value * 2;
});

map([10, 5, 13], doubleNumber);


function doubleAll(numbers) {
  return numbers.map(function(value) {
    return value * 2;
  });
}

let result = doubleAll([10, 5, 13]);

console.log(result);
