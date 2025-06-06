// task 2: Functions, Optional, and Literal Types
// Objective: Create a function with parameters and an optional literal type.

// Instructions:

// Define a function that takes:
// name (string)
// age (number)
// role (optional, with type 'admin' | 'user' | 'guest')
// The function should log these values or perform a basic action.

const user = (name: string, age: number, role?: "admin" | "user" | "guest") => {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Role: ${role ?? "not specified"}`);
};

function user1(name: string, age: number, role?: "admin" | "user" | "guest") {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Role: ${role ?? "not specified"}`);
}


function user2(name: string, age: number, role?: "admin" | "user" | "guest") {
    return {
      name,
      age,
      role: role ?? "not specified",
    };
  }
  const result = user2("Abul", 22);
console.log(result);
