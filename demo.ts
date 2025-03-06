// Basic TypeScript practice

// Explicitly typed variables
const age: number = 6;
const userName: string = "Jackie";

const pet: { name: string, age: number } = {
    name: "Bob",
    age: 20
}

const fruit: string[] = ["apple", "banana"];

// explicitily typed function
// write a function in ts that recieves 2 numbers amd returns their sum
function addTwo( val1: number, val2: number): number {
    return val1 + val2;
}

const addResult = addTwo( 1, 2 );
console.log( addResult )

interface Animal {
    name: string,
    age: number,
    species?: string | number
};

/*
? indicates that specific property is an option
| specifies that species can either be type string or number
*/

const ferret: Animal = { name: "Furry", age: 2}