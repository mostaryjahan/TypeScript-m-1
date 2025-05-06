"use strict";
{
    //Statics in OOP
    class Counter {
        static increment() {
            return (Counter.count = Counter.count + 1);
        }
        static decrement() {
            return (Counter.count = Counter.count - 1);
        }
    }
    Counter.count = 0;
    const instant1 = new Counter();
    console.log(Counter.increment());
    // const instant2 = new Counter(); static dile egulo lage na
    console.log(Counter.increment());
    // const instant3 = new Counter();
    console.log(Counter.decrement());
    //
}
