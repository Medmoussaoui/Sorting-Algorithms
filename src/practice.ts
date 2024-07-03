import { count } from "console";
import { toASCII } from "punycode";
import { formatWithOptions } from "util";

console.log("==== Practice code side =====");


function testRecurtion(num: number): any {
    if (num <= 0) return num;
    if (num % 2 == 0) return num + testRecurtion(num - 1);
    return testRecurtion(num - 1);
}

function Factorial(num: number): any { // Recursion Function
    return (num == 1) ? num : num * Factorial(num - 1);
}

function simpleFactorial(num: number) {
    let counter = num - 1;
    let total = num;
    while (counter != 0) {
        total = total * counter;
        counter--;
    }
    return total;
}

function power(num: number, M: number): any { // Recursion fun
    return (M == 1) ? num : num * power(num, M - 1);
}

function powerSimple(num: number, M: number) {
    if (M == 1) return 1;
    let p = num;
    let counter = 1;
    while (counter != M) {
        p = p * num;
        counter++;
    }
    return p;
}

let re = powerSimple(3, 4);

console.log(re);