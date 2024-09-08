let numbers: number[] = [1, 2, 3, 4, 5];

numbers.push(12);

console.log(numbers);

// Type Any

let arr1:any;

arr1 = [1, 2, 3, 4];
arr1 = ["Lucas", "Silva"]

// Tipo de parametros

function handleConsoleLog(log: string){
    console.log("Log de entrada: ", log);
}

handleConsoleLog("Oi Lucas");

// Tipo de retorno

function greeting(name: string): string{
    return `Olá, ${name}`;
}

console.log(greeting("Lucas"));

// Funções anônimas

setTimeout(()=>{
    console.log("Oi linduh!")
}, 100);

// Tipos de objetos

type User = {
    name: string;
    old: number;
    address: {
        street: string;
        cep: string;
        number: number;
        option: string;
    }
};

// Union type