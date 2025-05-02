{
  //generics

  type GenericArray = Array<string>;
  type GenericArray1 = Array<number>;
  type Generic<T> = Array<T>; //dynamic way

  const roll: number[] = [1, 2, 3, 4]; //general way to write
  //  const roll1: Array<number> = [1,2,3,4]// with generics
  const roll1: GenericArray1 = [1, 2, 3, 4]; // with generics
  const roll2: Generic<number> = [1, 2, 3, 4]; // with dynamic generics

  const city: string[] = ["dhaka", "ctg", "raj"]; //general way to write

  const city1: GenericArray = ["dhaka", "ctg", "raj"]; // with generics
  const city2: Generic<string> = ["dhaka", "ctg", "raj"]; // with generics

  const user: Generic<{name: string, age: number}> = [
    //but writing <object> is not recommend.
    {
      name: "abul",
      age: 40,
    },
    {
      name: "kabul",
      age: 20,
    },
  ];

  //function generic
  const add = (x: number, y: number) => x + y;
  add(20, 10);


//generic tuple
const human : [string, string]= ["car", "house"]//normal way

type GenericTuple<X,Y> = [X,Y];

const human1 : GenericTuple<string, string>  = ["car", "house"]//generic tuple 


const userID = [123,{name: "ss", email: "aa"}]
//with tuple
const userID1 : GenericTuple<number,{name: string, email:string}>
  = [123,{name: "ss", email: "aa"}]


//Generic with type
type UserID2 = {
    name: string;
    email: string;
}

//Generic with interface
type UserID3 = {
    name: string;
    email: string;
}



  //
}
