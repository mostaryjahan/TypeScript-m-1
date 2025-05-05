{
    //inheritance in oop

    class Person {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number,
            address: string ){
                this.name = name;
                this.age = age;
                this.address = address
            }
            getSleep(numberOfHour: number){
                console.log(`${this.name} will sleep for ${numberOfHour}`);
            }
    }

    class Student extends Person {
        // name: string;
        // age: number;
        // address: string;

        constructor(name: string, age: number,
            address: string ){
                // this.name = name;
                // this.age = age;
                // this.address = address
                super(name, age, address)
            }
            // getSleep(numberOfHour: number){
            //     console.log(`${this.name} will sleep for ${numberOfHour}`);
            // }
    }

const student1 = new Student("mr.x", 20 , "BD");
student1.


// example 2
class Teacher extends Person {
    // name: string;
    // age: number;
    // address: string;
     designation: string;

    constructor(name: string, age: number,
        address: string, designation: string ){
            // this.name = name;
            // this.age = age;
            // this.address = address;
            super(name, age, address)
             this.designation = designation
         
        }
        // getSleep(numberOfHour: number){
        //     console.log(`${this.name} will sleep for ${numberOfHour}`);
        // }
        takeClass(numberOfMin : number){
            console.log(`${this.name} take classes for ${numberOfMin} minutes`);
        }
}
const teacher1 = new Teacher("mr.x", 40 , "BD", "prof");
teacher1.







    //
}