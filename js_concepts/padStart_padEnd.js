// use padStart() and padEnd() to pad a string with a character
const originalString = "Hello";
const paddedString = originalString.padStart(10, "*");
console.log(paddedString); // *****Hello

const originalString2 = "World";
const paddedString2 = originalString2.padEnd(10, "-");
console.log(paddedString2); // World-----

// combine both padStart() and padEnd()
const text = "Hello";
const paddedText = text.padStart(10, "-").padEnd(15, "+");
console.log(paddedText); // -----Hello+++++

// another example:
const products = [
    { name: "Apples", price: 1.5 },
    { name: "Bananas", price: 0.75 },
    { name: "Oranges", price: 2 },
];

console.log("Product      Price");
console.log("-------------------");

products.forEach(({ name, price }) => {
    const paddedName = name.padEnd(10, " ");
    const formattedPrice = price.toFixed(2).padStart(8, " ");
    console.log(`${paddedName}${formattedPrice}`);
});

/*
  Output:
  
  Product      Price
  -------------------
  Apples        1.50
  Bananas       0.75
  Oranges       2.00
  */