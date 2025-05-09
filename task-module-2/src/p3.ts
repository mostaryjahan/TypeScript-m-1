{//Task 3: Object Types, Type Alias, & Literal Types
// Objective: Define a structured Person object using Type Aliases.

// Instructions:

// Define a Person type alias with properties for Name, Address, Hair and Eye Color, Income and Expense, Hobbies, Family Members, Job, Skills, Marital Status, and Friends.


    //type alias

    type Person = {
        name: string;
        address: string;
        Hair: string;
        hairAndEyeColor: string;
        incomeAndExpense: number;
        hobbies: string;
        familyMembers: number;
        job: string;
        skills: string;
        maritalStatus: boolean;
        friends: number
    }

    const person : Person = {
        name: "aa",
        address: "mm",
        Hair: "black",
        hairAndEyeColor: "black",
        incomeAndExpense: 2000,
        hobbies: "coding",
        familyMembers: 5,
        job: "dev",
        skills: "MERN",
        maritalStatus: true,
        friends: 2


    }

    console.log(person);

    type Person2 = {
        name: string;
        address: string;
        hair: string;
        hairAndEyeColor: string;
        income: number;
        expense: number;
        hobbies: string[];
        familyMembers: number;
        job: string;
        skills: string[];
        maritalStatus: boolean;
        friends: number;
      };
      
      const person2: Person2 = {
        name: "aa",
        address: "mm",
        hair: "black",
        hairAndEyeColor: "black-brown",
        income: 3000,
        expense: 1000,
        hobbies: ["coding", "reading"],
        familyMembers: 5,
        job: "dev",
        skills: ["MERN", "TS"],
        maritalStatus: true,
        friends: 2
      };
      
      console.log(person2);
      

   
}