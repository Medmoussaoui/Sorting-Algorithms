import assert from "assert";

console.log('<===================================>');
console.log('v                                   v');
console.log('v              < TEST >             v');
console.log('v                                   v');
console.log('<===================================>');
console.log();



const actual = 5;
const expected = 5;

class Person {
    name: string = "non";
    age: number = 0;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

