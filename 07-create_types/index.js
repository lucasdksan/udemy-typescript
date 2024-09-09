"use strict";
function showData(arg) {
    return `O dado é: ${arg}`;
}
console.log(showData("Oi Silva"));
console.log(showData(12));
console.log(showData(true));
console.log(showData([]));
console.log(showData({}));
// Reduzindo tipos aceitos em Generics
function showProductName(arg) {
    return `O nome do produto é: ${arg.name}`;
}
const myobj = {
    name: "Objeto Custom",
    color: "red"
};
console.log(showProductName(myobj));
const myCar = {
    name: "Voyage",
    wheels: 4,
    engine: 16,
    color: "#000"
};
const caneta = {
    color: "Azul",
    name: "Caneta turbo",
    engine: false,
    wheels: false,
};
console.log({ myCar, caneta });
// Type parameters
function getSomeKey(obj, key) {
    return `A chave ${String(key)} está presente no objeto e tem o valor ${obj[key]}`;
}
const server = {
    hd: "2TB",
    ram: "32GB"
};
console.log(getSomeKey(server, "ram"));
function showCharName(obj, name) {
    return `${obj[name]}`;
}
const myChar = {
    name: "Lucas da Silva",
    age: 26,
    hasDriveLicense: true,
};
console.log(showCharName(myChar, "name"));
// Typeof type operator
const userName = "Lucas";
const userName2 = "Leo";
