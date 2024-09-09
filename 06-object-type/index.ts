interface Product {
    name: string;
    price: number;
    isAvailable: boolean;
}

function showProductDetails(product: Product){
    console.log(`Nome do produto: ${product.name} e seu preço '${product.price}`);

    if(product.isAvailable){
        console.log("Produto está disponível!");
    }
}

const shirt: Product = {
    name: "Camisa",
    price: 100,
    isAvailable: true,
}

showProductDetails(shirt);

// Propriedades readonly

interface Car {
    brand: string;
    readonly wheels: number;
}

const fusca:Car = {
    brand: "VW",
    wheels: 4
}

console.log(fusca);

// Index Signature

interface CoordObject {
    [index: string]: number;
}

let coord: CoordObject = {
    x: 10,
    y: 20,
}

console.log(coord);

// Herança de interfaces

interface Human {
    name: string;
    age: number;
}

interface SuperHuman extends Human {
    superpowers: string[];
}

const lucas: SuperHuman = {
    age: 26,
    name: "Lucas da Silva",
    superpowers: [
        "dev",
        "back-end"
    ]
}  

console.log(lucas);

// Intersection types

interface Character {
    name: string;
}

interface Gun {
    type: string;
    caliber: number;
}

type HumanWithGun = Character & Gun;

let exemp: HumanWithGun = {
    caliber: .10,
    name: "Lucas Silva",
    type: "pistola"
}   

console.log(exemp);

// Readonly array

let myArr: ReadonlyArray<string> = ["Lucas", "Aline", "Leo", "Alda"];

console.log(myArr);

myArr.forEach(element=>{ console.log(element) })

// Tuplas
type fiveNumbers = [ number, number, number, number, number ]

const myNumberArr: fiveNumbers = [1, 2, 3, 4, 5]; 