// push/pop
//unshift/shift
//indexOf
//slice
let names =["Jon", "Jane", "Jack", "Jim"];

console.log(names);
let x = names.push("Jeen");
x = names.push("Ivan");
console.log(x);

let y = names.pop();
console.log(names);
console.log(y);

x = names.unshift("irene");
console.log(names);
console.log(x);

y = names.shift();
console.log(names);
console.log(y);

let z = names.indexOf("Jim");
console.log(z);

let toyota = ["Camry", 2010, "sedan", "black", true];
let isSedan = toyota.indexOf("sedan") === -1 ?
    console.log("type is not sedan") :
    console.log("type is sedan");
let cars = ["Honda", "Kia", "Peugeot", "Opel", "Mersedes", "Toyota"];
let germanCars = cars.slice(3, 5);
console.log(germanCars);
console.log(cars);