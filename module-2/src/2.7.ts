{
  //Constraint using key of

  //generic Constraint with key of operator
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; //manually

  type Owner2 = keyof Vehicle; //keyof operator

//   const person1: Owner2 = "";

  // const user = {
  //     name: "x",
  //     age: 22,
  //     address: "BD"
  // }

  // user["age"];

  const getPropertyValue =<X, Y extends keyof X> (obj: X, key: Y) => {
    return obj[key];
  }

   const user = {
      name: "x",
      age: 22,
      address: "BD"
  }

  const car = {
    model: "x",
    price: 22,
    name: "BD"
}

  const result = getPropertyValue(user, "name");




  //
}
