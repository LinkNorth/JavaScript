function Shape(x, y, color) {
  this.x = x;
  this.y = y;
  this.color;
}

Shape.prototype.translate = function(dx, dy) {
  this.x += dx;
  this.y += dy;
}

Shape.prototype.setColor = function(color) {
  this.color = color;
}

function Circle(x, y, r, color) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.color = color;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.scale = function(scale) {
  this.r *= scale;
}

Circle.prototype.render = function(ctx) {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
  ctx.stroke();
}

Circle.prototype.update = function() {
  this.scale(1.1);
}

function Rectangle(x, y, width, height, color, animation) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;
  this.animation = animation;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.scale = function(scale) {
  this.width *= scale;
  this.height *= scale;
}

Rectangle.prototype.render = function(ctx) {
  ctx.fillRect(this.x, this.y, this.width, this.height);
}

Rectangle.prototype.update = function() {
  this.animation();
}


let shapes = [];
let colors = ['orange', 'red', 'blue', 'yellow', 'green', 'purple', 'pink', 'black', 'magenta', 'teal'];

/*
for (let i = 0; i < 10; i += 1) {
  let color = colors[i];
  let shape;
  if (i % 2 === 0) {
    shape = new Rectangle(0, 60 * i, 50, 50, color);
  } else {
    shape = new Circle(0, 60 * i, 10, color);
  }
  shapes.push(shape);
}
*/

function moveLeftToRight() {
  this.translate(1, 0);
}
let rec1 = new Rectangle(0, 0, 50, 50, 'orange', moveLeftToRight);
let rec4 = new Rectangle(0, 50, 50, 50, 'purple', moveLeftToRight);
let rec2 = new Rectangle(0, 0, 50, 50, 'red', function() {
  this.translate(0, 1);
});
let rec3 = new Rectangle(0, 0, 50, 50, 'blue', function() {
  this.translate(1, 1);
});

shapes.push(rec1, rec2, rec3, rec4);

let canvas = document.querySelector('#canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext('2d');


setInterval(function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let shape of shapes) {
    ctx.fillStyle = shape.color;
    shape.update();
    shape.render(ctx);
  }

}, 10);










