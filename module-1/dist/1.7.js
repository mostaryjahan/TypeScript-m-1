"use strict";
{
    //spread operator
    //rest operator
    //destructuring
    //spread operator------------------------------->>>>>>
    //array spread
    const city1 = ["dhaka", "ctg", "khulna"];
    const city2 = ["rajshahi, rangpur", "sylhet"];
    // city1.push(city2) //error because Argument of type 'string[]' is not assignable to parameter of type 'string'. That’s why we have to use the spread operator(...)
    city1.push(...city2);
    console.log(city1); // Output: ['dhaka', 'ctg', 'khulna', 'rajshahi', 'rangpur', 'sylhet']
    //object spread
    const person = { name: "Rain", age: 21 };
    //   const person: { name: string; age: number } = { name: "Rain", age: 21 };
    // type Person = {
    //     name: string;
    //     age: number;
    //   };
    //   const person: Person = { name: "Rain", age: 21 };
    const contact = { email: "rain@example.com" };
    // Merging objects
    const user = Object.assign(Object.assign({}, person), contact);
    console.log(user); // { name: 'Rain', age: 21, email: 'rain@example.com' }
    //rest operator----------------------------------->>>>>
    function allFruits(...fruits) {
        fruits.forEach((fruit) => console.log(`many fruits ${fruit}`));
    }
    allFruits("apple", "banana", "lichi", "mango");
    console.log(allFruits);
}
