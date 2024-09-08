"use strict";
// 1 typeof Type Guard
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log("Dados invalidos");
    }
}
sum("12", "231");
sum(16, 14);
sum("2312", 123123);
//  Checando se valor existe
function operations(arr, operation) {
    if (operation) {
        if (operation === "sum") {
            const sum = arr.reduce((i, total) => i + total);
            console.log("Resultado da soma: ", sum);
        }
        else if (operation === "multiply") {
            const mul = arr.reduce((i, total) => i * total);
            console.log("Resultado da soma: ", mul);
        }
    }
    else {
        console.log("Por favor, defina uma operação!");
    }
}
// Operador instanceof
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const Lucas = new User("Lucas da Silva");
const Leo = new SuperUser("Leonardo da Silva");
console.log(Lucas);
console.log(Leo);
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`Olá ${user.name}, deseja ver os dados do sistema?`);
    }
    else if (user instanceof User) {
        console.log(`Olá ${user.name}`);
    }
}
userGreeting(Lucas);
userGreeting(Leo);
// Operador in
class Dog {
    constructor(name, bread) {
        this.name = name;
        if (bread) {
            this.bread = bread;
        }
    }
}
const turca = new Dog("Turca");
const bob = new Dog("Bob", "Pastor Alemão");
function showDogDetails(dog) {
    if ("bread" in dog) {
        console.log(`O cachorro é da raça ${dog.bread}`);
    }
    else {
        console.log("O cachorro é caramelo");
    }
}
showDogDetails(turca);
showDogDetails(bob);
function userReview(review) {
    if (typeof review === "boolean" && !review) {
        return "O Usuário não deixou Review";
    }
    if (typeof review === "number") {
        switch (review) {
            case 1:
                return "Review muito negativo";
                break;
            case 2:
                return "Review negativo";
                break;
            case 3:
                return "Review mediano";
                break;
            case 4:
                return "Review positivo";
                break;
            case 5:
                return "Review perfeito";
                break;
        }
    }
    return "Positivo, porém sem nota";
}
