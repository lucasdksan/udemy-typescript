"use strict";
function showProductDetails(product) {
    console.log(`Nome do produto: ${product.name} e seu preço '${product.price}`);
    if (product.isAvailable) {
        console.log("Produto está disponível!");
    }
}
const shirt = {
    name: "Camisa",
    price: 100,
    isAvailable: true,
};
showProductDetails(shirt);
const fusca = {
    brand: "VW",
    wheels: 4
};
console.log(fusca);
let coord = {
    x: 10,
    y: 20,
};
console.log(coord);
const lucas = {
    age: 26,
    name: "Lucas da Silva",
    superpowers: [
        "dev",
        "back-end"
    ]
};
console.log(lucas);
let exemp = {
    caliber: .10,
    name: "Lucas Silva",
    type: "pistola"
};
console.log(exemp);
// Readonly array
let myArr = ["Lucas", "Aline", "Leo", "Alda"];
console.log(myArr);
myArr.forEach(element => { console.log(element); });
const myNumberArr = [1, 2, 3, 4, 5];
