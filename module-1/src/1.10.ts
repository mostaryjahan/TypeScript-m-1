{
    //Union Types
    type FrontendDeveloper1 = "fresher" | "junior"
    type FullStackDeveloper1 = "frontedDeveloper" | "backendDeveloper";
    type Developer1 = FrontendDeveloper1 | FullStackDeveloper1


    const newDeveloper1: Developer1 = "junior"


    type User = {
        name: string;
        email: string;
        gender: "male" | "female";
        bloodGroup?: "O+" | "A+" |"B+" | "AB+"
    }

    const user1: User = {
        name: "rain",
        email: "rain@email.com",
        gender: "female"
    }


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