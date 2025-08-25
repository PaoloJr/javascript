// preserve object integrity by sealing and freezing them (immutability)
// seal:
const person1 = {
    name: "Kolade",
    luckyNum: 10,
    footballFan: true,
    club: "Chelsea",
};

// seal the object with Object.seal()
// Object.seal() allows for entry-modifications
Object.seal(person1);

console.log(person1.name); // Kolade

person1.favPet = "Cat"; // You can't add entries to a sealed object
console.log(person1.favPet); // undefined

delete person1.club; // You can't remove entries from a sealed object
console.log(person1.club); // Chelsea

// You can still edit the property values
person1.name = "Kolade Chris";
console.log(person1.name); // Kolade Chris

// check if the object is sealed and frozen with isSealed() and isFrozen()
console.log(Object.isSealed(person1)); // true
console.log(Object.isFrozen(person1)); // false

const person2 = {
    name: "Jane",
    luckyNum: 11,
    footballFan: true,
    club: "Man United",
};

// freeze the object with Object.freeze()
// Object.freeze() does not allow for entry-modifications; more strict than Object.seal()
Object.freeze(person2);

console.log(person2.name); // Jane

person2.favPet = "Cat"; // You can't add entries to a frozen object
console.log(person2.favPet); // undefined

person2.name = "Jane Doe";
console.log(person2.name); // Jane – nothing changes

delete person2.club; // You can't remove entries from a frozen object
console.log(person2.club); // Man United

// check if the object is frozen and sealed with isFrozen() and isSealed()
console.log(Object.isFrozen(person2)); // true
console.log(Object.isSealed(person2)); // true
// isSealed() returns true because a frozen object is also a sealed object