// use Array.from() to create arrays from Array-list Object or iterables
function sumArguments() {
  // The "arguments" object is array-like
  const argsArray = Array.from(arguments);
  return argsArray.reduce((acc, num) => acc + num, 0);
}

const result = sumArguments(1, 2, 3, 4, 5);
console.log(result); // Output: 15

// use map() to transform all the elements of an array (creates new same-length array)
const numbers = [1, 4, 9, 16, 25];

const squareRoots = numbers.map((num) => Math.sqrt(num));
console.log(squareRoots); //[1, 2, 3, 4, 5]

const names = ["john", "jane", "smith"];

const capitalizedNames = names.map((name) => name.toUpperCase());
console.log(capitalizedNames); // ['JOHN', 'JANE', 'SMITH']

// use filter() to filter through arrays (creates new same-length array)
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const oddNums = nums.filter((num) => num % 2 !== 0);
const evenNumbers = nums.filter((num) => num % 2 === 0);

console.log(evenNumbers); // [2, 4, 6, 8, 10, 12, 14]
console.log(oddNums); // [1,  3,  5,  7, 9, 11, 13, 15]

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 300 },
  { id: 4, name: "Headphones", price: 100 },
];

const cheapProducts = products.filter((product) => product.price < 500);

console.log(cheapProducts);
/*
  [
    { id: 3, name: 'Tablet', price: 300 },
    { id: 4, name: 'Headphones', price: 100 }
  ]
  */

// use forEach() to loop through array
const fruits = ["apple", "banana", "orange"];

// with for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// with forEach() – cleaner!
fruits.forEach((fruit) => {
  console.log(fruit);
});

/*
Output: 
apple
banana
orange
*/