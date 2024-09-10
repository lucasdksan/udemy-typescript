//  Classes

class User {
    name!: string;
    age!: number;
}

const user_1: User = new User();

user_1.age = 10;
user_1.name = "Lucas Silva"

console.log(user_1);

// Constructor

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

const user_2 = new Person("Lucas Silva", 26);

console.log(user_2);


// Propriedades readonly

class Car {
    name: string;
    readonly wheels = 4;

    constructor(name: string){
        this.name = name;
    }
}

const myCar = new Car("voyage");

console.log(myCar);

// Herança e super

class Machine {
    name: string;

    constructor(name: string){
        this.name = name;
    }
}

const motor = new Machine("Motor");

class KillerMachine extends Machine {
    guns: string[];

    constructor(guns: string[], name: string) {
        super(name);
        this.guns = guns;
    }
}

const destroyer = new KillerMachine(["Pistola", "Bazuca"], "Destroyer");

console.log({ destroyer, motor });

// Métodos

class Dwarf {
    name: string;

    constructor(name: string){
        this.name = name;
    }

    greeting() {
        console.log("Olá jovem!");
    }
}

const jimmy = new Dwarf("Jimmy");

console.log(jimmy);