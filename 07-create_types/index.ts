function showData<T>(arg: T): string {
    return `O dado é: ${arg}`;
}

console.log(showData("Oi Silva"));
console.log(showData(12));
console.log(showData(true));
console.log(showData([]));
console.log(showData({}));

// Reduzindo tipos aceitos em Generics

function showProductName<T extends { name: string; }>(arg: T){
    return `O nome do produto é: ${arg.name}`;
}

const myobj = {
    name: "Objeto Custom",
    color: "red"
}

console.log(showProductName(myobj));

// Generics com Interface

interface MyObject <T, U, C> {
    name: string;
    wheels: T;
    engine: U;
    color: C;
}

type Car = MyObject<number, number, string>;
type Pen = MyObject<boolean, boolean, string>;

const myCar: Car = {
    name: "Voyage",
    wheels: 4,
    engine: 16,
    color: "#000"
}

const caneta: Pen = {
    color: "Azul",
    name: "Caneta turbo",
    engine: false,
    wheels: false,
}

console.log({ myCar, caneta });

// Type parameters

function getSomeKey<T, K extends keyof T>(obj: T, key: K){
    return `A chave ${String(key)} está presente no objeto e tem o valor ${obj[key]}`
}

const server = {
    hd: "2TB",
    ram: "32GB"
}

console.log(getSomeKey(server, "ram"));

// Keyof type operator

type Character = { 
    name: string;
    age: number;
    hasDriveLicense: boolean;
}

type C = keyof Character;

function showCharName(obj: Character, name: C): string{
    return `${obj[name]}`;
}

const myChar = {
    name: "Lucas da Silva",
    age: 26,
    hasDriveLicense: true,
}

console.log(showCharName(myChar, "name"));

// Typeof type operator

const userName: string = "Lucas";
const userName2: typeof userName = "Leo";

// Indexed access types

type Truck = {
    km: string;
    kg: string;
    description: string;
}

type Km = Truck["km"];

// Conditional types

interface A {}

interface B extends A {}

type myType = B extends A ? number : string;

// Template literals type

