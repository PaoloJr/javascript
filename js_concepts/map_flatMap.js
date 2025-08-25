// remove duplicates from an Array with Set and Map
// they both do not accept duplicate values
// create unique arrays with Set()
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = [...new Set(arrayWithDuplicates)];

console.log(uniqueArray); // [1, 2, 3, 4, 5]

// create unique arrays with Map()
const fruitsWithDuplicates2 = [
    "Mango",
    "Cashew",
    "Barley",
    "Mango",
    "Barley",
    "Berry",
    "Cashew",
];
const uniqueFruitsWithDuplicates2 = [
    ...new Map(fruitsWithDuplicates2.map((item) => [item, true])).keys(),
];

console.log(uniqueFruitsWithDuplicates2);
// [ 'Mango', 'Cashew', 'Barley', 'Berry' ]

// mat through and Array and flatten it with the flatMap() method
// used on multi-dimensional arrays

// using .flat() and .map()
const numbers = [1, 2, 3, 4, 5];

const doubledAndSquared = numbers.map((num) => [num * 2, num * num]);
const flattenedArr = doubledAndSquared.flat();

console.log(doubledAndSquared); // [ [ 2, 1 ], [ 4, 4 ], [ 6, 9 ], [ 8, 16 ], [ 10, 25 ] ]
console.log(flattenedArr); //  [2, 1, 4, 4, 6, 9, 8, 16, 10, 25]

// using flatMap()
// combine map and flat
const combinedMapAndFlat = numbers.flatMap((num) => [num * 2, num * num]);

console.log(combinedMapAndFlat); // Output: [2, 1, 4, 4, 6, 9, 8, 16, 10, 25];