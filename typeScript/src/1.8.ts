{
  //destructuring: object destructuring, array destructuring------------------------->

  //object destructuring
  const user = {
    id: 1565,
    name: {
      firstName: "abul",
      middleName: "mofiz",
      lastName: "hablu",
    },
    contactInfo: "017000233838",
    address: "BD",
  };

  const {
    contactInfo, //we can not declare type here
    name: { middleName },
  } = user;

  console.log(contactInfo, middleName);

  //array destructuring
  const place = [
    "Cox's Bazar",
    "Saint Martin",
    "Bandarbon",
    "Sajek",
    "jaflong",
  ];

  // const [place1, place2, place3] = place;
  // console.log(place1, place2, place3);//Cox's Bazar Saint Martin Bandarbon
  const [, , place3, ...rest] = place;
  console.log(place3, rest); //Bandarbon [ 'Sajek', 'jaflong' ]
  console.log(place3, ...rest); //Bandarbon Sajek jaflong
  const result = [place3, ...rest].join(", ");
  console.log(result); //Bandarbon, Sajek, jaflong
}
