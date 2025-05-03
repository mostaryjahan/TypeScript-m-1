{
  //Function with generics

  //normal way
  const createArray = (param: string): string[] => {
    return [param];
  };

//   //with function generics
  const createArrayWithGenerics = <T>(param: T): T[] => {
    return [param];
  };

  const result1 = createArray("BD");
  const resultGeneric = createArrayWithGenerics<boolean>(true);


// ///type
  type User = {
    id: number;
    name: string;
  };
  const resultGenericObject = createArrayWithGenerics<User>({
    id: 22,
    name: "motu",
  });


  //interface
  interface User1 {
    id: number;
    name: string;
  };
  const resultGenericObject1 = createArrayWithGenerics<User1>({
    id: 22,
    name: "motu",
  });


//tuple---------------------->


 //with function generics
 const createArrayWithTuple = <T, Q>(param1: T, param2: Q) : [T,Q] => {
    return [param1, param2];
  };

  const resultTuple = createArrayWithTuple<boolean, string>(true, "ctg");
  const resultTuple1 = createArrayWithTuple<string, {name: string}>("ctg", {name: "asia"});


///type
  type User3 = {
    id: number;
    name: string;
  };

  const resultTupleObject = createArrayWithTuple<User3, null>({
    id: 22,
    name: "motu",
  }, null);




  //example
  const addCourse = <T>(student : T) => {
    const course = "next level"

    return {
        ...student,
        course
    }
  }

  const student1 = addCourse({name: "a", email: "g", devType: "full"})
  const student2 = addCourse({name: "a", email: "g", isGood: true})

  //
}
