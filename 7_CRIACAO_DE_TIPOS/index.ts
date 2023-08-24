// 1 - Generics
function showData<T>(arg: T): string {
    return `O dado é: ${arg}`;
}
console.log(showData(5));
console.log(showData("testando generics"));
console.log(showData(["teste", "generics"]));

// 2 - Constraint em Generics
function showProductName<T extends { name: string }>(obj: T) {
    return `O nome do produto é: ${obj.name}`;
}
const myObj = { name: "Porta", cor: "Branca" };
const otherObj = { price: 10.99, category: "Roupa" };
console.log(showProductName(myObj));
// console.log(showProductName(otherObj));

// 3 - Interfaces com Generics
interface MyObject<T, U, Q> {
    name: string;
    wheels: T;
    engine: U;
    color: Q;
}
type Car = MyObject<number, number, string>;
type Pen = MyObject<boolean, boolean, string>;
const myCar: Car = { name: "Fusca", wheels: 4, engine: 1.0, color: "Branca" };
const myPen: Pen = {
    name: "Caneta BIC",
    wheels: false,
    engine: false,
    color: "Azul",
};
console.log(myCar);
console.log(myPen);

// 4 - Type parameters
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
    return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`;
}
const server = { hd: "2TB", ram: "32GB" };
console.log(getSomeKey(server, "ram"));
// console.log(getSomeKey(server, "teste"));

// 5 - keyof Type Operator
type Character = { name: string; age: number; hasDriveLicence: boolean };
type C = keyof Character;
function showCharKey(obj: Character, key: C): string {
    return `${obj[key]}`;
}
const myChar: Character = {
    name: "Diego",
    age: 31,
    hasDriveLicence: true,
};
console.log(showCharKey(myChar, "name"));
console.log(showCharKey(myChar, "age"));
// console.log(showCharKey(myChar, "naaass"));

// 6 - typeof Type Operator
const userName: string = "Diego";
const userName2: typeof userName = "Maria";
// const userName3 = typeof userName = 111
type x = typeof userName;
const userName4: x = "João";

// 7 - Indexed Access types
type Truck = { km: number; kg: number; description: string };
type Km = Truck["km"];
const newTruck: Truck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão de pequeno porte",
};
function showKm(km: Km) {
    return `O veículo tem a km de ${km}`;
}
console.log(showKm(newTruck.km));

// 8 - Conditional Expressions Type
interface A {}
interface B extends A {}
interface Teste {
    showName(): string;
}
type myType = B extends A ? number : string;
const someVar: myType = 5;
// const someVar2: myType = "teste";
type myTypeB = Teste extends { showNumber(): number } ? string : boolean;
type myTypeC = Teste extends { showName(): string } ? string : boolean;

// 9 - Template Literals Type
type testA = "text";
type CustomType = `some ${testA}`;
const testing: CustomType = "some text";
// const testing2: CustomType = "some text 2";
type a1 = "Testando";
type a2 = "Union";
type a3 = `${a1}` | `${a2}`;
const c4: a3 = "Testando";
const c5: a3 = "Union";
