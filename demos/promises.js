function wait(seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve();
    }, seconds * 1000);
  });
}

wait(5)
  .then(data => {
    return wait(3)
      .then(() => {
        console.log('asd');
        return wait(5);
      })
  })
  .then(() => {
    console.log('asd 2');
    return wait(3);
  });


function getTodos() {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.load('GET', '/todos');
    xhr.addEventListener('load', function() {
      try {
        let data = JSON.parse(this.responseText);
        resolve(data);
      } catch (e) {
        reject(e);
      }
    });
    xhr.send();
  });
}

function getPizzas() {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.load('GET', '/pizzas');
    xhr.addEventListener('load', function() {
      let data = JSON.parse(this.responseText);
      resolve(data);
    });
    xhr.send();
  });
}

function getFruits() {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.load('GET', '/fruits');
    xhr.addEventListener('load', function() {
      let data = JSON.parse(this.responseText);
      resolve(data);
    });
    xhr.send();
  });
}

function renderTodos(data) {

}

Promise.all([
  getTodos(),
  getPizzas(),
  getFruits(),
])
  .then(data => {
    [todos, pizzas, fruits];
    let todos = data[0];
    let pizzas = data[1];
    let fruits = data[2];
  })
  .catch(e => {

  });

loader.show();
getTodos()
  .then(function(todos) {
    return getPizzas()
      .then(pizzas => {
        return {
          todos: todos,
          pizzas: pizzas,
        };
      });
  })
  .then(function(data) {
    return getFruits()
      .then(fruits => {
        data.fruits = fruits;
        return data;
      });
  })
  .then(function(data) {
    console.log(data.pizzas, data.todos, data.fruits);
  })
  .catch(function(err) {
    console.log(err);
  });

getTodos(function(err, todos) {
  if (err) {
    console.error(err);
    return;
  }
  getPizzas(function(err, pizzas) {
    if (err) {
      console.error(err);
      return;
    }
    getFruits(function(err, fruits) {
      if (err) {
        console.error(err);
        return;
      }
    });
  });
});
