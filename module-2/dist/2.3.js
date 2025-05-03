"use strict";
{
    const roll = [1, 2, 3, 4]; //general way to write
    //  const roll1: Array<number> = [1,2,3,4]// with generics
    const roll1 = [1, 2, 3, 4]; // with generics
    const roll2 = [1, 2, 3, 4]; // with dynamic generics
    const city = ["dhaka", "ctg", "raj"]; //general way to write
    const city1 = ["dhaka", "ctg", "raj"]; // with generics
    const city2 = ["dhaka", "ctg", "raj"]; // with generics
    const user = [
        //but writing <object> is not recommend.
        {
            name: "abul",
            age: 40,
        },
        {
            name: "kabul",
            age: 20,
        },
    ];
    //function generic
    const add = (x, y) => x + y;
    add(20, 10);
    //generic tuple
    const human = ["car", "house"]; //normal way
    const human1 = ["car", "house"]; //generic tuple 
    const userID = [123, { name: "ss", email: "aa" }];
    //with tuple
    const userID1 = [123, { name: "ss", email: "aa" }];
    //
}
