"use strict";
//reference type ---> object
const user = {
    company: 'tesla',
    firstName: "mostary",
    middleName: "jahan",
    lastName: "brishty",
    isMarried: false,
};
// user.company ="ph" it gives error cause literal type
const user1 = {
    firstName: "mostary",
    lastName: "brishty",
    company: "ph"
};
// user1.company = "oh" error cause readonly
