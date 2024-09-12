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

//  This

class Truck {
    model: string;
    hp: number;

    constructor(model: string, hp: number){
        this.model = model;
        this.hp = hp;
    }

    showDetails(){
        console.log(`O caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência!`);
    }
}

const volvo = new Truck("Volvo", 400);

volvo.showDetails();

// Getters

class PersonGetter {
    private _name: string;
    private _surname: string;

    constructor(name: string, surname: string){
        this._name = name;
        this._surname = surname;
    }

    get name(){
        return this._name;
    }

    get surname(){
        return this._surname;
    }

    get fullName(){
        return `${this._name} ${this._surname}`;
    }
}

const l = new PersonGetter("Lucas", "Silva");

console.log(l.fullName);

// Setter

class Coor {
    _x!: number;
    _y!: number;

    set x(value: number) {
        this._x = value;
    }

    set y(value: number) {
        this._y = value;
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    print(){
        console.log({ x: this.x, y: this.y });
    }
}

const home = new Coor();

home.x = 10;
home.y = 11;

home.print();

//  Herança interface

interface ShowTitle {
    itemTitle: ()=> string;
}

class BlogPost implements ShowTitle {
    title: string;

    constructor(title: string){
        this.title = title;
    }

    itemTitle() {
        return `Valor do title é ${this.title}`;
    };
}

const vars = new BlogPost("Oi Lucas");

console.log(vars.itemTitle());