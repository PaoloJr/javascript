// clone objects with spread operator, Object.assign() and JSON.parse()
const originalObject = {
  name: "Kolade",
  luckyNum: 10,
  isFootballFan: true,
  club: "Chelsea",
};

// clone with spread operator
const clonedObject1 = { ...originalObject };

// clone with Object.assign()
const clonedObject2 = Object.assign({}, originalObject);

// deep cloning with JSON.stringify() and JSON.parse()
const clonedObject3 = JSON.parse(JSON.stringify(originalObject));
console.table(clonedObject1);
console.table(clonedObject2);
console.table(clonedObject3);