{
    //Conditional types

    type a1 = number;
    type b1 = undefined;


    type x = a1 extends null ? true : false

    type y = a1 extends null ? true : b1 extends undefined ? undefined : any




    //example
    type Rich = {
          bike: string;
          car: string;
          ship: string
    }

// type Check<T> = T extends "bike" | "car" | "ship" ? true : false // 
type Check<T> = T extends keyof Rich ? true : false // 



type HasBike = Check<"bike"> //true
type HasBus = Check<"bus"> //false
    //
}