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
//  This
class Truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`O caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência!`);
    }
}
const volvo = new Truck("Volvo", 400);
volvo.showDetails();
// Getters
class PersonGetter {
    constructor(name, surname) {
        this._name = name;
        this._surname = surname;
    }
    get name() {
        return this._name;
    }
    get surname() {
        return this._surname;
    }
    get fullName() {
        return `${this._name} ${this._surname}`;
    }
}
const l = new PersonGetter("Lucas", "Silva");
console.log(l.fullName);
// Setter
class Coor {
    set x(value) {
        this._x = value;
    }
    set y(value) {
        this._y = value;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    print() {
        console.log({ x: this.x, y: this.y });
    }
}
const home = new Coor();
home.x = 10;
home.y = 11;
home.print();
class BlogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `Valor do title é ${this.title}`;
    }
    ;
}
const vars = new BlogPost("Oi Lucas");
console.log(vars.itemTitle());
// Override de métodos
class Base {
    someMethod() {
        console.log("OI");
    }
}
class NewBase extends Base {
    someMethod() {
        console.log("OI doido");
    }
}
const myBase = new NewBase();
myBase.someMethod();
// Public
class C {
    constructor() {
        this.x = 10;
        this.y = 11;
    }
}
const ct = new C();
console.log("C: ", { x: ct.x, y: ct.y });
// Protected
class E {
    constructor() {
        this.x = 10;
    }
}
class D extends E {
    showX() {
        console.log("Oi X: ", this.x);
    }
}
const dd = new D();
dd.showX();
//  Private
class PrivateClass {
    constructor() {
        this._name = "Lucas";
    }
    get name() {
        return this._name;
    }
}
const obj = new PrivateClass();
console.log(obj.name);
// Static Members
class StaticMembers {
}
StaticMembers.props = {
    name: "Lucas"
};
console.log(StaticMembers.props);
// Generic class
class Item {
    constructor(f, s) {
        this.first = f;
        this.second = s;
    }
    get f() {
        return this.first;
    }
    get s() {
        return this.second;
    }
}
const newItem = new Item("Lucas", 10);
console.log({
    f: newItem.f,
    s: newItem.s
});
console.log(typeof newItem.f);
console.log(typeof newItem.s);
// Parameter properties
class ParameterProperties {
    constructor(name, _qt, _price) {
        this.name = name;
        this._qt = _qt;
        this._price = _price;
        this.name = name;
        this._price = _price;
        this._qt = _qt;
    }
    get qt() {
        return this._qt;
    }
    get price() {
        return this._price;
    }
}
const newShirt = new ParameterProperties("C Lucas", 12, 100);
// Class expressions
const myC = class {
    constructor(cpf, some) {
        this.cpf = cpf;
        this.some = some;
        this.cpf = cpf;
        this.some = some;
    }
};
// Classe abstrata
class AbstractClass {
}
class AbstractEx extends AbstractClass {
    constructor(name) {
        super();
        this.name = name;
    }
    showNam() {
        console.log(this.name);
    }
}
const abs = new AbstractEx("Lucas");
abs.showNam();
