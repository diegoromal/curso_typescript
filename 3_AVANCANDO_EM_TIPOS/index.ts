// 1 - Arrays
let numbers: number[] = [1, 2, 3];

numbers.push(5);

console.log(numbers[2]);

// numbers = "teste";

const nomes: string[] = ["Matheus", "João"];

// nomes.push(4);

// 2 - Outra sintaxe array
const nums: Array<number> = [100, 200];

nums.push(300);

// nums.push("teste");

console.log(nums);

// 3 - Any

const arr1: any = [1, "teste", true, [], { nome: "Diego" }];

console.log(arr1);

arr1.push([1, 2, 3]);

console.log(arr1);

// 4 - Parâmetros tipados

function soma(a: number, b: number) {
    console.log(a + b);
}
soma(2, 5);

// soma("a", "b");

// 5 - Retorno de função

function greeting(name: string): string {
    // return 5;
    return `Olá ${name}!`;
}

console.log(greeting("Diego"));

// 6 - Funcão anônima
setTimeout(function () {
    const sallary: number = 1000;
    // console.log(parseFloat(sallary));
    // console.log(sallary); -> comentado somente para não atrapalhar os demais itens
}, 2000);

// 7 - Tipos de objeto
function passCoordinates(coord: { x: number; y: number }) {
    console.log("X coordinates: " + coord.x);
    console.log("Y coordinates: " + coord.y);
}
const objCoord = { x: 329, y: 84.2 };

passCoordinates(objCoord);
// passCoordinates({ nome: 1, sobrenome: 2 });

const pessoaObj: { name: string; surname: string } = {
    name: "Diego",
    surname: "Rom Al",
};

// 8 - Propriedades opcionais
function showNumbers(a: number, b: number, c?: number) {
    console.log("A: " + a);
    console.log("B: " + b);
    if (c) {
        console.log("C: " + c);
    }
}
showNumbers(1, 2, 3);
showNumbers(4, 5);

// 9 - Validação de argumento opcional
function advanceGreeting(firstName: string, lastName?: string) {
    if (lastName !== undefined) {
        return `Olá ${firstName} ${lastName}, tudo bem?`;
    }
    return `Olá ${firstName}, tudo bem?`;
}

console.log(advanceGreeting("Diego", "Romanio de Almeida"));
console.log(advanceGreeting("Diego"));

// 10 - Union types
function showBalance(balance: string | number) {
    return `O saldo da conta é R$${balance}`;
}

console.log(showBalance(100));
console.log(showBalance("500"));
// console.log(showBalance(true));

const arr2: Array<number | string | boolean> = [1, "teste", true];

// 11 - Avançando com Union Types
function showUserRole(role: boolean | string) {
    if (typeof role == "boolean") {
        return "Usuário não aprovado!";
    }
    return `A funcão do usuário é: ${role}`;
}

console.log(showUserRole(false));
console.log(showUserRole("Admin"));

// 12 - Type alias
type ID = string | number;
function showId(id: ID) {
    return `O ID é: ${id}`;
}
console.log(showId(1));
console.log(showId("200"));

// 13 - Introdução às interfaces
interface Point {
    x: number;
    y: number;
    z: number;
}
function showCoords(obj: Point) {
    return `X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`;
}

const coordObj: Point = {
    x: 1,
    y: 2,
    z: 3,
};

console.log(showCoords(coordObj));

// 14 - interface x type alias
interface Person {
    name: string;
}

interface Person {
    age: number;
}

const somePerson: Person = { name: "Diego", age: 31 };

console.log(somePerson);

type personType = {
    name: string;
};

// type personType = {
//     age: number;
// };

// 15 - Literal types
let test: "testando";

test = "testando";

function showDirection(direction: "left" | "right" | "center") {
    return `A direção é ${direction}`;
}
console.log(showDirection("left"));
// console.log(showDirection("top"));

// 16 - non null assertion operators
const p = document.getElementById("some-p");
// console.log(p.innerText);
console.log(p!.innerText);

// 17 - Bigint
let n: bigint;
// n = 1
n = 1000n;
console.log(typeof n);

// 18 - Symbol
let symbolA: symbol = Symbol("a");
let symbolB = Symbol("a");

console.log(symbolA == symbolB);
console.log(symbolA === symbolB);

// 19 -
