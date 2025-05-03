"use strict";
{
    //   const person1: Owner2 = "";
    // const user = {
    //     name: "x",
    //     age: 22,
    //     address: "BD"
    // }
    // user["age"];
    const getPropertyValue = (obj, key) => {
        return obj[key];
    };
    const user = {
        name: "x",
        age: 22,
        address: "BD"
    };
    const car = {
        model: "x",
        price: 22,
        name: "BD"
    };
    const result = getPropertyValue(user, "name");
    //
}
