"use strict";
var _a, _b;
{
    //ternary operator || optional chaining || nullish coalescing operator
    const age = 22;
    if (age > 18) {
        console.log("adult");
    }
    else {
        console.log("not adult");
    }
    //ternary chaining 
    const age1 = 12;
    const isAdult = age1 >= 20 ? "adult" : "not adult";
    console.log({ isAdult });
    const user = {
        name: "rain",
        address: {
            city: "BG",
            road: "no road",
            presentAddress: " BG Town"
        }
    };
    const permanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "no permanent address";
    console.log({ permanentAddress });
    //nullish coalescing operator(null , undefined)
    const isReal = undefined;
    const result = isReal !== null && isReal !== void 0 ? isReal : "fake";
    const result2 = isReal ? isReal : "fake";
    console.log({ result }, { result2 });
}
