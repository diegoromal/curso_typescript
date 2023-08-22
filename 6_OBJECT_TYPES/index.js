"use strict";
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`);
    if (product.isAvailable) {
        console.log("O produto está disponível");
    }
}
const shirt = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true,
};
showProductDetails(shirt);
showProductDetails({ name: "Tênis", price: 129.99, isAvailable: false });
function showUserDetails(user) {
    console.log(`O usuário tem o e-mail: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuário é: ${user.role}`);
    }
}
const u1 = { email: "diego@qosit.com.br", role: "Admin" };
const u2 = { email: "joao@joao.com" };
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: "VW",
    wheels: 4,
};
console.log(fusca);
let coords = {
    x: 10,
};
coords.y = 15;
// coords.z = "teste";
console.log(coords);
const diego = {
    name: "Diego",
    age: 31,
};
console.log(diego);
const goku = {
    name: "Goku",
    age: 50,
    superPowers: ["Kamehameha", "Genki Dama"],
};
console.log(goku);
console.log(goku.superPowers[1]);
const arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12,
};
console.log(arnold);
// 7 - ReadOnlyArray
let myArray = ["Maçã", "Laranja", "Banana"];
// myArray[3] = "Mamão";
console.log(myArray);
myArray.forEach((item) => {
    console.log("Fruta: " + item);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
const myNumberArray = [1, 2, 3, 4, 5];
// const myNumberArray2: fiveNumbers = [1, 2, 3, 4, 5, 6];
// const mixedArray: fiveNumbers = [1, true, "teste", 4, 5];
console.log(myNumberArray);
const anotherUser = ["Diego", 31];
console.log(anotherUser[0]);
anotherUser[0] = "João";
// anotherUser[1] = "João";
console.log(anotherUser[0]);
// 9 - Tuplas com readonly
function showNumbers(numbers) {
    // numbers[0] = 10;
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
