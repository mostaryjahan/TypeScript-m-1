//reference type ---> object

const user : {
    company: 'tesla' //type ->literal types
    firstName: string;
    middleName: string;
    lastName: string;
    isMarried: boolean;
} = {
    company: 'tesla',
   firstName: "mostary",
   middleName: "jahan",
   lastName: "brishty",
   isMarried: false,
}

// user.company ="ph" it gives error cause literal type

const user1 : {
    readonly company: string
    firstName: string;
    middleName?: string; //optional
    lastName: string;
} = {
   firstName: "mostary",
   lastName: "brishty",
   company: "ph"
}

// user1.company = "oh" error cause readonly

