let x: number = 10;

x = 20;

let firstName: string = "Diego";
let age: number = 31;
const isAdmin: boolean = true;

// object

const myNumbers: number[] = [1, 2, 3];
myNumbers.push(5);

// tuplas
let myTuple: [number, string, string[]];

// object literals
const user: { name: string; age: number } = { name: "João", age: 33 };

// any
let a: any = 0;
a = "teste";
a = true;
a = [];

// union type
let id: string | number = "10";
id = 200;

// type alias
type myIdType = number | string;
let userId: myIdType = 10;
userId = "10";

// enum
// tamanho de roupas (size: Médio, size: Pequeno)
enum Size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande",
}

const camisa = {
    name: "Camisa Gola V",
    size: Size.G,
};

// literal types
let teste: "autenticado" | null;
teste = "autenticado";
teste = null;
