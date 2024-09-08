"use strict";
// Void
function hello(param) {
    console.log(`Olá, ${param}`);
}
//  Callback sem argumento
function greeting(name) {
    return `Olá, ${name}!`;
}
function preGreeting(fn, userName) {
    console.log("Preparando a função!");
    fn(userName);
}
preGreeting(greeting, "Lucas da Silva");
// Generic function
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3, 4, 5]));
console.log(firstElement(["A", "B", "C"]));
// Constraint em generic function
function biggestNumber(a, b) {
    let biggest;
    biggest = (+a > +b) ? a : b;
    return biggest;
}
console.log(biggestNumber(10, 15));
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [4, 5]));
// console.log(mergeArrays([1, 2, 3], ["as", "As"])); 
console.log(mergeArrays([1, 2, 3], ["as", "As"]));
// Argumentos opcionais
function modernGreeting(name, greet) {
    if (greet) {
        return `Olá ${greet} ${name}, tudo bem?`;
    }
    return `Olá ${name}, tudo bem?`;
}
console.log(modernGreeting("Lucas"));
console.log(modernGreeting("Lucas", "Sr."));
// Parâmetro default
function sumDefault(n, m = 10) {
    return n + m;
}
console.log(sumDefault(9));
console.log(sumDefault(9, 20));
let ats = {
    name: "Lucas",
    age: 26,
    cpf: "07386996322"
};
const { name: userName, ...person } = ats;
