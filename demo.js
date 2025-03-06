"use strict";
// Basic TypeScript practice
// Explicitly typed variables
const age = 6;
const userName = "Jackie";
const pet = {
    name: "Bob",
    age: 20
};
const fruit = ["apple", "banana"];
// explicitily typed function
// write a function in ts that recieves 2 numbers amd returns their sum
function addTwo(val1, val2) {
    return val1 + val2;
}
const addResult = addTwo(1, 2);
console.log(addResult);
