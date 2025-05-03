"use strict";
{
    // Constraints in typescript
    const addCourse = (student) => {
        const course = "next level";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourse({
        id: 22,
        name: "a",
        email: "g",
        devType: "full",
    });
    const student2 = addCourse({ id: 22, name: "a", email: "g", isGood: true });
    const student3 = addCourse({ id: 22, name: "a", email: "g" });
    //
}
