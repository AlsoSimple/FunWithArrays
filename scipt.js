let myArray = ['apple', 'banana', 'orange', 'grape', 'kiwi', 'pineapple', 'strawberry', 'blueberry', 'watermelon', 'pear'];

console.log(myArray.pop());

// pop takes the last element in an array and returns it.


myArray.push('fried chicken');

console.log(myArray);

// push is used to add more elements to an array


myArray.shift();

console.log(myArray);

// Shift is used to remove the first element in an array


myArray.unshift('Beans', 'water');

console.log(myArray);

// Unshift adds elements to the beggining of an array.

console.log(myArray.slice(2, 5));

// Slice selects a selection of an array by defining a start an end.

myArray.forEach((element) => console.log(element))

// forEach adds a function to each specified element