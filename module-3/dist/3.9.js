"use strict";
{
    //real implementation
    class Car {
        startEngine() {
            console.log(`I am starting the engine`);
        }
        stopEngine() {
            console.log(`I am stopping the engine`);
        }
        move() {
            console.log(`I am moving the engine`);
        }
        test() {
            console.log(`i am just testing`);
        }
    }
    const toyotaCar = new Car();
    toyotaCar.startEngine();
    //
}
