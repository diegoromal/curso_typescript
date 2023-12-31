// 1 - Tipo de objeto para função com interface
interface Product {
    name: string;
    price: number;
    isAvailable: boolean;
}
function showProductDetails(product: Product) {
    console.log(
        `O nome do produto é ${product.name} e seu preço é R$${product.price}`
    );
    if (product.isAvailable) {
        console.log("O produto está disponível");
    }
}
const shirt: Product = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true,
};
showProductDetails(shirt);
showProductDetails({ name: "Tênis", price: 129.99, isAvailable: false });

// 2 - Propriedade opcional em interface
interface User {
    email: string;
    role?: string;
}
function showUserDetails(user: User) {
    console.log(`O usuário tem o e-mail: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuário é: ${user.role}`);
    }
}
const u1: User = { email: "diego@qosit.com.br", role: "Admin" };
const u2: User = { email: "joao@joao.com" };
showUserDetails(u1);
showUserDetails(u2);

// 3 - readonly
interface Car {
    brand: string;
    readonly wheels: number;
}
const fusca: Car = {
    brand: "VW",
    wheels: 4,
};
console.log(fusca);
// fusca.wheels = 5;

// 4 - Index signature
interface CoordObject {
    [index: string]: number;
}
let coords: CoordObject = {
    x: 10,
};
coords.y = 15;
// coords.z = "teste";
console.log(coords);

// 5 - Extendind interfaces
interface Human {
    name: string;
    age: number;
}
interface SuperHuman extends Human {
    superPowers: string[];
}
const diego: Human = {
    name: "Diego",
    age: 31,
};
console.log(diego);
const goku: SuperHuman = {
    name: "Goku",
    age: 50,
    superPowers: ["Kamehameha", "Genki Dama"],
};
console.log(goku);
console.log(goku.superPowers[1]);

// 6 - Intersection Types
interface Character {
    name: string;
}
interface Gun {
    type: string;
    caliber: number;
}
type HumanWithGun = Character & Gun;
const arnold: HumanWithGun = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12,
};
console.log(arnold);

// 7 - ReadOnlyArray
let myArray: ReadonlyArray<string> = ["Maçã", "Laranja", "Banana"];
// myArray[3] = "Mamão";
console.log(myArray);
myArray.forEach((item) => {
    console.log("Fruta: " + item);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);

// 8 - Tuplas
type fiveNumbers = [number, number, number, number, number];
const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5];
// const myNumberArray2: fiveNumbers = [1, 2, 3, 4, 5, 6];
// const mixedArray: fiveNumbers = [1, true, "teste", 4, 5];
console.log(myNumberArray);
type nameAndAge = [string, number];
const anotherUser: nameAndAge = ["Diego", 31];
console.log(anotherUser[0]);
anotherUser[0] = "João";
// anotherUser[1] = "João";
console.log(anotherUser[0]);

// 9 - Tuplas com readonly
function showNumbers(numbers: readonly [number, number]) {
    // numbers[0] = 10;
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
