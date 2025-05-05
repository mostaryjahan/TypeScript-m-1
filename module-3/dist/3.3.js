"use strict";
{
    const add = (param1, param2) => {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2;
        }
        else {
            return param1.toString() + param2.toString();
        }
    };
    const res1 = add("2", "3");
    console.log(res1);
    const getUser = (user) => {
        if ("role" in user) {
            console.log(`My name is ${user} and my role is ${user.role}`);
        }
        else {
            console.log(`My role is ${user.name}`);
        }
    };
    const normalUser = {
        name: "qq"
    };
    const adminUser = {
        name: "qq",
        role: "admin"
    };
    getUser(normalUser);
    //
}
