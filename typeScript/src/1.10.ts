{
    //Union Types
    // type FrontendDeveloper = "fresher" | "junior"
    // type FullStackDeveloper = "frontedDeveloper" | "backendDeveloper";
    // type Developer = FrontendDeveloper | FullStackDeveloper


    // const newDeveloper: Developer = "junior"


    // type User = {
    //     name: string;
    //     email: string;
    //     gender: "male" | "female";
    //     bloodGroup?: "O+" | "A+" |"B+" | "AB+"
    // }

    // const user1: User = {
    //     name: "rain",
    //     email: "rain@email.com",
    //     gender: "female"
    // }


//intersection type---------------------------------------->

type FrontendDeveloper = {
    skills: string[];
    designation1: "frontend"
}

type BackendDeveloper = {
    skills: string[];
    designation2: "backend"
}

type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

const fullStackDeveloper: FullStackDeveloper = {
    skills: ["HTML", "CSS"],
    designation1: "frontend",
    designation2: "backend"
}







}