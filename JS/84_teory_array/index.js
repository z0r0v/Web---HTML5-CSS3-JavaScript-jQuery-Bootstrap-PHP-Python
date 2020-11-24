let color1 = "red";
let color2 = "orange";
let color3 = "yellow";
let color4 = "green";
let color5 = "blue";
let color6 = "indigo";
let color7 = "violet";

const rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

console.log('The sky is ' + rainbowColors[4]);
rainbowColors[0] = "orange";
console.log(rainbowColors);
rainbowColors[8]= "red";
console.log(rainbowColors);
rainbowColors[rainbowColors.length] = "dark blue";
console.log(rainbowColors);

let emptyArray = [];
let emptyArrayNew = new Array();

let numbers = [1, 3, 5, 32];

console.log(numbers);