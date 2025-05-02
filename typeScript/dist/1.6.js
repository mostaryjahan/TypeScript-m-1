"use strict";
{
    //normal function
    // arrow function
    //normal function
    function add(num1 = 10, num2 = 20) {
        return num1 + num2;
    }
    // add(2, "2"); //type error cause number+ string
    console.log(add(2, 3));
    // arrow function
    const addArrow = (num1, num2) => num1 + num2;
    addArrow(2, 2);
    addArrow(2, "2"); //type error cause number+ string
    //object--> function --> method
    const rich = {
        name: "brishty",
        balance: 0,
        addBalance(balance) {
            return this.balance + balance;
        },
    };
    const superRich = {
        name: "brishty",
        balance: 0,
        addBalance(balance) {
            return `Her new balance is : ${this.balance + balance}`;
        },
    }; //return will be string because i use here `` string
    //callback function
    const array = [1, 2, 3, 4];
    const newArray = array.map((elem) => elem * elem);
}
