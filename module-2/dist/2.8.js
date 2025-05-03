"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
{
    //Asynchronous typescript
    //promise
    // type Something = {something: string}
    //   //simulate 
    //   const createPromise = () : Promise<Something> =>{
    //     return new Promise<Something>((resolve, reject) => {
    //         const data : Something = {something: "something"};
    //         if (data){
    //             resolve(data)
    //         }else {
    //             reject("failed to load data")
    //         }
    //     })
    //   }
    //   //calling create promise function 
    //   const showData = async() : Promise<Something>  => {
    //   const data : Something = await createPromise();
    //   return data;
    // //   console.log(data);
    //   }
    //   showData()
    //with json fetch
    const getTodo = () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = yield response.json();
        console.log(data);
    });
    getTodo();
    //simulate 
    const createPromise = () => {
        return new Promise((resolve, reject) => {
            const data = { something: "something" };
            if (data) {
                resolve(data);
            }
            else {
                reject("failed to load data");
            }
        });
    };
    //calling create promise function 
    const showData = () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield createPromise();
        return data;
        //   console.log(data);
    });
    showData();
    //
}
