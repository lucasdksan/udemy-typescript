function myDecorator(){
    console.log("Iniciando decorator");

    return function(target: any, propertKey: string, descriptor: PropertyDescriptor) {
        console.log("Executando");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    }
}

function a(){
    console.log("Iniciando A")

    return function(target: any, propertKey: string, descriptor: PropertyDescriptor) {
        console.log("Executando");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    }
}

function b(){
    console.log("Iniciando B")

    return function(target: any, propertKey: string, descriptor: PropertyDescriptor) {
        console.log("Executando");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    }
}

function c(){
    console.log("Iniciando C")

    return function(target: any, propertKey: string, descriptor: PropertyDescriptor) {
        console.log("Executando");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    }
}

class myClass {
    @myDecorator()
    @b()
    @c()
    @a()
    testing(){
        console.log("Terminando execução do método");
    }
}

const _class = new myClass();

_class.testing();

// Class decorator

function classDec(constructor: Function){
    console.log("Constructor: ", constructor);
}

@classDec
class User {
    name: string;

    constructor(name: string){
        this.name = name;
    }
}

const lucas  = new User("Lucas");

// metodo decorator

function method(value: boolean){
    console.log("Iniciando Method")

    return function(target: any, propertKey: string, descriptor: PropertyDescriptor) {
        console.log("Executando");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    }
}

class Machine {
    _name: string;

    constructor(name: string){
        this._name = name;
    }

    @method(false)
    showName(){
        console.log(this._name)
    }
}

// Acessor decorator

class Monster {
    private _name?;
    private _age?;

    constructor(name: string, age: number){
        this._name = name;
        this._age = age;
    }

    get name(){
        return this._name;
    }

    get age(){
        return this._age;
    }
}

const charmander = new Monster("Charmander", 12);

console.log(charmander);

//  Property decorator

function formatNumebr() {
    return function(target: Object, propertKey: string) {  
        let value: string;

        const getter = function(){
            return value;
        }

        const setter = function (newValue: string){
            value = newValue.padStart(5, "0");
        }

        Object.defineProperty(target, propertKey, {
            set: setter,
            get: getter
        })
    }
}

class Id {
    @formatNumebr()
    id;

    constructor(id: string) {
        this.id = id;
    }
}

const _id = new Id("1");


console.log(_id);

//  Exemplo real do class decorator

function createDate(created: Function){
    created.prototype.createdAt = new Date();
}

@createDate
class Book {
    id;
    createdAt?: Date

    constructor(id: string) {
        this.id = id;
    }
}

@createDate
class Pen {
    id;
    createdAt?: Date

    constructor(id: string) {
        this.id = id;
    }
}

const newBook = new Book("12");
const newPen = new Pen("12");

console.log(newBook.createdAt);
console.log(newPen.createdAt);

// Exemplo real com Method decorator

function checkInUserPosted(){
    return function(target: any, propertKey: string, descriptor: PropertyDescriptor){
        const childFunction = descriptor.value;

        descriptor.value = function(...args: any[]){
            if(args[1] === true) {
                console.log("Postou")
            } else{
                return childFunction.apply(this, args);
            }
        }

        return descriptor;
    }        
}

class Post {
    alreadyPosted = false;

    @checkInUserPosted()
    post(content: string, alreadyPosted: boolean){
        this.alreadyPosted = true;

        console.log(content);
    }
}

const nP = new Post();

nP.post("Uiii", true);
nP.post("Uiii 2", true);

// Exemplo real com Property decorator

function Max(limit: number) {
    return function(target: Object, propertKey: string) {  
        let value: string;

        const getter = function(){
            return value;
        }

        const setter = function (newValue: string){
            if(newValue.length > limit){
                console.log(`O valor deve ter no máximo ${limit} digitos`);
                return
            } else {
                value = newValue;
            }
        }

        Object.defineProperty(target, propertKey, {
            set: setter,
            get: getter
        })
    }
}

class Admin {
    @Max(10)
    username;

    constructor(username: string) {
        this.username = username;
    }

}