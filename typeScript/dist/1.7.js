"use strict";
{
    //spread operator
    //rest operator
    //destructuring
    //spread operator
    //array spread
    const city1 = ['dhaka', 'ctg', "khulna"];
    const city2 = ['rajshahi, rangpur', 'sylhet'];
    // city1.push(city2)//error because Argument of type 'string[]' is not assignable to parameter of type 'string'. That’s why we have to use the spread operator(...)
    city1.push(...city2);
    console.log(city1); // Output: ['dhaka', 'ctg', 'khulna', 'rajshahi', 'rangpur', 'sylhet']
}
