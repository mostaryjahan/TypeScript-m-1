{
  //Utility types

  ///pick type

  type Person = {
    name: string;
    age: number;
    email?: string;
    contact: string;
  };

  type NameAge = Pick<Person, "name" | "age">;

  //omit (mane bad deoya)
  type ContactInfo = Omit<Person, "name" | "age">;

  //required
  type PersonRequired = Required<Person>;

  //partial
  type PersonPartial = Partial<Person>;

  //readonly type

  type PersonReadOnly = Readonly<Person>
  const person1: PersonReadOnly = {
    name: "mm",
    age: 20,
    contact: "028383",
  };


  //record type
//   type MyObj = {
//     a : string;
//     b: string
//   }

type MyObj = Record<string, string>

  const obj1: MyObj = {
    a: "aa",
    b: "bb",
    c: "cc"
  }

  //object er kono ekta key obossoi string hobe
  const EmptyObj : Record<string, unknown> = {}

  //
}
