//basic data types

//string
let firstNme : string = "John";

//number
let roll : number = 25;

//boolean
let isActive : boolean = true;

//undefined
let x : undefined = undefined;
//null
let y : null = null;

//any type
let d;

//array
let arr : number[] = [1, 2, 3, 4, 5]; //number array
let fruits : string[] = ["apple", "banana", "orange"]; //string array
let mixed : (string | number)[] = [1, "apple", 2, "banana"]; //mixed array

//tuple
let tuple : [string, number] = ["John", 25]; //tuple with string and number

//tuple --> array--> order--> type of value
let coordinates : [number, number] = [10, 20]; //tuple with two numbers
let ageName : [string, number, boolean] = ["John", 25, true]; //tuple with string and number
ageName[0] = "Doe"; //string