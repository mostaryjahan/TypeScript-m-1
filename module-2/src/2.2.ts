{
    //Interface
//normally how we write

type User1 ={
    name: string;
    age: number;
}//alias

//how to write in interface
interface User2 {
    name: string;
    age: number
}

type UserRole1 = User1 & {role: string};

interface UserRole2 extends User2 {
    role: string
}

const user1: UserRole2 = {
    name: "abul",
    age: 100,
    role: "admin"
}


//js --> object--> ,array->object

//with type alias
type Roll = number[];

//interface with array
interface Roll1 {
    [index: number] : number

}
const rollNumber: Roll1 = [1,2,3]


//interface with function
type Add1 = (num1: number, num2: number) =>number;//alias
interface Add2 {
    (num1: number, num2: number) : number
}

const add: Add2 = (num1, num2) => num1+num2;



    //
}