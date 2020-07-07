function list() {
    return Array.prototype.slice.call(arguments);
}

function vasya() {
    console.log(arguments)
}

  
  var list1 = list(1, 2, 3); // [1, 2, 3]
  
  // Создаём функцию с предустановленным ведущим аргументом
  var leadingThirtysevenList = list.bind(undefined, 37, 35);
  
  var list2 = leadingThirtysevenList(); // [37]
  var list3 = leadingThirtysevenList(1, 2, 3); // [37, 1, 2, 3]



  let vasya1 = vasya(123)