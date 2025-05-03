"use strict";
{
    //Function with generics
    //normal way
    const createArray = (param) => {
        return [param];
    };
    //   //with function generics
    const createArrayWithGenerics = (param) => {
        return [param];
    };
    const result1 = createArray("BD");
    const resultGeneric = createArrayWithGenerics(true);
    const resultGenericObject = createArrayWithGenerics({
        id: 22,
        name: "motu",
    });
    ;
    const resultGenericObject1 = createArrayWithGenerics({
        id: 22,
        name: "motu",
    });
    //tuple---------------------->
    //with function generics
    const createArrayWithTuple = (param1, param2) => {
        return [param1, param2];
    };
    const resultTuple = createArrayWithTuple(true, "ctg");
    const resultTuple1 = createArrayWithTuple("ctg", { name: "asia" });
    const resultTupleObject = createArrayWithTuple({
        id: 22,
        name: "motu",
    }, null);
    //example
    const addCourse = (student) => {
        const course = "next level";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourse({ name: "a", email: "g", devType: "full" });
    const student2 = addCourse({ name: "a", email: "g", isGood: true });
    //practice
    const practice = (student, age) => {
        const course = "next level";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student10 = practice({ name: "a", email: "g", devType: "full" }, null);
    const student20 = practice({ name: "a", email: "g", isGood: true }, null);
    console.log({ student10 });
    //
}
