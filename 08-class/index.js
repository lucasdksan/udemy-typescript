"use strict";
//  Classes
class User {
}
const user_1 = new User();
user_1.age = 10;
user_1.name = "Lucas Silva";
console.log(user_1);
// Constructor
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const user_2 = new Person("Lucas Silva", 26);
console.log(user_2);
// Propriedades readonly
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const myCar = new Car("voyage");
console.log(myCar);
// Herança e super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const motor = new Machine("Motor");
class KillerMachine extends Machine {
    constructor(guns, name) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new KillerMachine(["Pistola", "Bazuca"], "Destroyer");
console.log({ destroyer, motor });
// Métodos
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log("Olá jovem!");
    }
}
const jimmy = new Dwarf("Jimmy");
console.log(jimmy);
