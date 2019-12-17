function traverse(node, f) {
  let stop = f(node);
  if (stop) return stop;
  for (let child of node.children) {
    if (traverse(child, f)) {
      break;
    }
  }
  return stop;
}


function getElementsByTagName(startNode, tagName) {
  let result = [];
  traverse(startNode, (node) => {
    if (node.tagName === tagName.toUpperCase()) {
      result.push(node);
    }
  });

  return result;
}

function getElementsByClassName(startNode, className) {
  let result = [];
  traverse(startNode, (node) => {
    if (node.classList.contains(className)) {
      result.push(node);
    }
  });

  return result;
}

function getElementById(startNode, id) {
  let result;
  traverse(startNode, (node) => {
    if (node.id === id) {
      result = node;
      return true;
    }
  });

  return result;
}

function getElementByIdProper(startNode, id) {
  if (node.id === id) {
    return node;
  }
  
  for (let child of node.children) {
    let result = getElementByIdProper(child, id);
    if (result) return result;
  }
}

function getElementsByClassName(node, className) {
  let result = [];
  function getElementsByClassNameInner(node, className) {
    if (node.classList.contains(className)) {
      result.push(node);
    }
    
    for (let child of node.children) {
      getElementsByClassNameInner(child, className);
    }

  }
  getElementsByClassNameInner(node, className);
  return result;
}

function getElementsByClassNameOld(node, className) {
  let result = [];
  if (node.classList.contains(className)) {
    result.push(node);
  }

  for (let child of node.children) {
    result = result.concat(getElementsByClassNameOld(child, className));
  }

  return result;
}

let elements = getElementsByClassName(document.body, 'test');
console.log(elements);
let title = getElementById(document.body, 'title');
console.log(title);
let divs = getElementsByTagName(document.body, 'div');
console.log(divs);

for (let element of elements) {
  element.style.backgroundColor = 'red';
}
