"use strict";
// 1 - Generics
function showData(arg) {
    return `O dado é: ${arg}`;
}
console.log(showData(5));
console.log(showData("testando generics"));
console.log(showData(["teste", "generics"]));
// 2 - Constraint em Generics
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const myObj = { name: "Porta", cor: "Branca" };
const otherObj = { price: 10.99, category: "Roupa" };
console.log(showProductName(myObj));
const myCar = { name: "Fusca", wheels: 4, engine: 1.0, color: "Branca" };
const myPen = {
    name: "Caneta BIC",
    wheels: false,
    engine: false,
    color: "Azul",
};
console.log(myCar);
console.log(myPen);
// 4 - Type parameters
function getSomeKey(obj, key) {
    return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`;
}
const server = { hd: "2TB", ram: "32GB" };
console.log(getSomeKey(server, "ram"));
function showCharKey(obj, key) {
    return `${obj[key]}`;
}
const myChar = {
    name: "Diego",
    age: 31,
    hasDriveLicence: true,
};
console.log(showCharKey(myChar, "name"));
console.log(showCharKey(myChar, "age"));
// console.log(showCharKey(myChar, "naaass"));
// 6 - typeof Type Operator
const userName = "Diego";
const userName2 = "Maria";
const userName4 = "João";
const newTruck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão de pequeno porte",
};
function showKm(km) {
    return `O veículo tem a km de ${km}`;
}
console.log(showKm(newTruck.km));
const someVar = 5;
const testing = "some text";
const c4 = "Testando";
const c5 = "Union";
