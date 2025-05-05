{
  //Type guard using typeof & in

  //typeof -- type guard

  type Alfaneumeric = string | number;

  const add = (param1: Alfaneumeric, param2: Alfaneumeric): Alfaneumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const res1 = add("2", "3");
  console.log(res1);

  //in guard

  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My name is ${user} and my role is ${user.role}`);
    } else {
      console.log(`My role is ${user.name}`);
    }
  };

  const normalUser : NormalUser = {
    name: "aa"
  };
  const adminUser : AdminUser = {
    name: "qq",
    role: "admin"
  }

  getUser(normalUser);
  //
}
