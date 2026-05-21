"use strict";
function greet() {
    console.log("Hello World!");
}
greet();
//Parameterized function
function addition(a, b) {
    console.log(`The sum of ${a} and ${b} is ${a + b}`);
}
addition(5, 10);
//Function with return type
function subtraction(a, b) {
    return a - b;
}
console.log(subtraction(10, 5));
function stop() {
    throw new Error("This function never returns"); //
}
stop();
