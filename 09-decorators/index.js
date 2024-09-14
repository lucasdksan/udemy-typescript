"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function myDecorator() {
    console.log("Iniciando decorator");
    return function (target, propertKey, descriptor) {
        console.log("Executando");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    };
}
function a() {
    console.log("Iniciando A");
    return function (target, propertKey, descriptor) {
        console.log("Executando");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    };
}
function b() {
    console.log("Iniciando B");
    return function (target, propertKey, descriptor) {
        console.log("Executando");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    };
}
function c() {
    console.log("Iniciando C");
    return function (target, propertKey, descriptor) {
        console.log("Executando");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    };
}
class myClass {
    testing() {
        console.log("Terminando execução do método");
    }
}
__decorate([
    myDecorator(),
    b(),
    c(),
    a(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], myClass.prototype, "testing", null);
const _class = new myClass();
_class.testing();
// Class decorator
function classDec(constructor) {
    console.log("Constructor: ", constructor);
}
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    classDec,
    __metadata("design:paramtypes", [String])
], User);
const lucas = new User("Lucas");
// metodo decorator
function method(value) {
    console.log("Iniciando Method");
    return function (target, propertKey, descriptor) {
        console.log("Executando");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    };
}
class Machine {
    constructor(name) {
        this._name = name;
    }
    showName() {
        console.log(this._name);
    }
}
__decorate([
    method(false),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Machine.prototype, "showName", null);
// Acessor decorator
class Monster {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
}
const charmander = new Monster("Charmander", 12);
console.log(charmander);
//  Property decorator
function formatNumebr() {
    return function (target, propertKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newValue) {
            value = newValue.padStart(5, "0");
        };
        Object.defineProperty(target, propertKey, {
            set: setter,
            get: getter
        });
    };
}
class Id {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNumebr(),
    __metadata("design:type", Object)
], Id.prototype, "id", void 0);
const _id = new Id("1");
console.log(_id);
//  Exemplo real do class decorator
function createDate(created) {
    created.prototype.createdAt = new Date();
}
let Book = class Book {
    constructor(id) {
        this.id = id;
    }
};
Book = __decorate([
    createDate,
    __metadata("design:paramtypes", [String])
], Book);
let Pen = class Pen {
    constructor(id) {
        this.id = id;
    }
};
Pen = __decorate([
    createDate,
    __metadata("design:paramtypes", [String])
], Pen);
const newBook = new Book("12");
const newPen = new Pen("12");
console.log(newBook.createdAt);
console.log(newPen.createdAt);
// Exemplo real com Method decorator
function checkInUserPosted() {
    return function (target, propertKey, descriptor) {
        const childFunction = descriptor.value;
        descriptor.value = function (...args) {
            if (args[1] === true) {
                console.log("Postou");
            }
            else {
                return childFunction.apply(this, args);
            }
        };
        return descriptor;
    };
}
class Post {
    constructor() {
        this.alreadyPosted = false;
    }
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log(content);
    }
}
__decorate([
    checkInUserPosted(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Boolean]),
    __metadata("design:returntype", void 0)
], Post.prototype, "post", null);
const nP = new Post();
nP.post("Uiii", true);
nP.post("Uiii 2", true);
// Exemplo real com Property decorator
function Max(limit) {
    return function (target, propertKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newValue) {
            if (newValue.length > limit) {
                console.log(`O valor deve ter no máximo ${limit} digitos`);
                return;
            }
            else {
                value = newValue;
            }
        };
        Object.defineProperty(target, propertKey, {
            set: setter,
            get: getter
        });
    };
}
class Admin {
    constructor(username) {
        this.username = username;
    }
}
__decorate([
    Max(10),
    __metadata("design:type", Object)
], Admin.prototype, "username", void 0);
