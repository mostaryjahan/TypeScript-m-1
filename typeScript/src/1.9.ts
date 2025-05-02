{
// Type alias in typescript

type Student ={
    name: string;
    age: number;
    phone?: string;
    gender: string;
    address: string

}

const user1 : Student= {
    name: "abul",
    age: 50,
    gender: "male",
    phone: "0192373",
    address: "BD"
};

const user2 : Student= {  
    name: "kabul",
    age: 30,
    gender: "female",
    address: "ctg"
};

const user3 : Student= {
    name: "kabul",
    age: 30,
    gender: "female",
    address: "ctg"
}


type UserName = string
type IsAdmin= boolean

const userName: UserName = "Rain";
const isAdmin: IsAdmin = false;


//function
type Add =(num1: number, num2: number)=> number;
const add: Add = (num1, num2) => num1 + num2;
console.log(add(3,4));








}