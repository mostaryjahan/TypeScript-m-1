"use strict";
// task 2: Functions, Optional, and Literal Types
// Objective: Create a function with parameters and an optional literal type.
// Instructions:
// Define a function that takes:
// name (string)
// age (number)
// role (optional, with type 'admin' | 'user' | 'guest')
// The function should log these values or perform a basic action.
const user = (name, age, role) => {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Role: ${role !== null && role !== void 0 ? role : "not specified"}`);
};
function user1(name, age, role) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Role: ${role !== null && role !== void 0 ? role : "not specified"}`);
}
function user2(name, age, role) {
    return {
        name,
        age,
        role: role !== null && role !== void 0 ? role : "not specified",
    };
}
const result = user2("Abul", 22);
console.log(result);
