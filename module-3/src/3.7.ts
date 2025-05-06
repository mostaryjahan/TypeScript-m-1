{
    //Statics in OOP

class Counter {
   static count: number =0;
   static increment(){
      return  (Counter.count = Counter.count + 1);
    }
   static decrement(){
        return  (Counter.count = Counter.count - 1);
      }
}

const instant1 = new Counter();
console.log(Counter.increment());

// const instant2 = new Counter(); static dile egulo lage na
console.log(Counter.increment());

// const instant3 = new Counter();
console.log(Counter.decrement());







    //
}