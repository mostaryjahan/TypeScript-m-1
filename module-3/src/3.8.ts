{
  //Polymorphism

  class Person {
    getSleep() {
      console.log(`I am sleeping for 7 hours per day`);
    }
  }

  class Student {
    getSleep() {
      console.log(`I am sleeping for 7 hours per day`);
    }
  }

  class Developer {
    getSleep() {
      console.log(`I am sleeping for 7 hours per day`);
    }
  }

  const getSleepingHour = (param: Person) => {
    param.getSleep();
  };

  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();

  getSleepingHour(person1);
  getSleepingHour(person2);
  getSleepingHour(person3);


  //example:

  class Shape {
    getArea(): number {
        return 0;
    }
  }

  class Circle extends Shape {
    radius : number;

    constructor(radius:number) {
        super();
        this.radius = radius
    }
    getArea(): number {
        return Math.PI * this.radius * this.radius
    }
  }


  class Rectangle extends Shape {
    height : number;
    width : number;

    constructor(height:number, width : number) {
        super();
        this.height = height;
        this.width = width;
    }
    getArea(): number {
        return this.height * this.width
    }
  }

  const getShapeArea = (param : Shape)=>{
    console.log(param.getArea());
  }

  const shape1 = new Shape();
  const shape2 = new Circle(10);
  const shape3 = new Rectangle(10,10);

 getShapeArea(shape2)
  //
}
