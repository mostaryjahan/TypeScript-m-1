{
    //ternary operator || optional chaining || nullish coalescing operator

    const age: number = 22;
    if(age > 18) {
        console.log("adult");
    }else{
        console.log("not adult");
    }

//ternary chaining 
const age1: number = 12;
const isAdult = age1>= 20 ? "adult" : "not adult";
console.log({isAdult});



//optional operator
type User = {
    name: string;
    address: {
        city: string;
        road: string;
        presentAddress: string;
        permanentAddress?: string
    }
}

const user: User = {
    name: "rain",
    address: {
        city: "BG",
        road: "no road",
        presentAddress: " BG Town"
    }   
}

const permanentAddress = user?.address?.permanentAddress ?? "no permanent address";
console.log({permanentAddress});


//nullish coalescing operator(null , undefined)
const isReal = undefined;

const result = isReal ?? "fake";
const result2 = isReal ? isReal : "fake"
console.log({result}, {result2});









}