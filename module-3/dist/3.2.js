"use strict";
{
    //inheritance in oop
    class Person {
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numberOfHour) {
            console.log(`${this.name} will sleep for ${numberOfHour}`);
        }
    }
    class Student extends Person {
        // name: string;
        // age: number;
        // address: string;
        constructor(name, age, address) {
            // this.name = name;
            // this.age = age;
            // this.address = address
            super(name, age, address);
        }
    }
    const student1 = new Student("mr.x", 20, "BD");
    student1;
    // example 2
    class Teacher extends Person {
        constructor(name, age, address, designation) {
            // this.name = name;
            // this.age = age;
            // this.address = address;
            super(name, age, address);
            this.designation = designation;
        }
        // getSleep(numberOfHour: number){
        //     console.log(`${this.name} will sleep for ${numberOfHour}`);
        // }
        takeClass(numberOfMin) {
            console.log(`${this.name} take classes for ${numberOfMin} minutes`);
        }
    }
    const teacher1 = new Teacher("mr.x", 40, "BD", "prof");
    console.log({ teacher1 });
    //
}
