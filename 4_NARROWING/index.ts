// 1 - Typeof type guard
function sum(a: number | string, b: number | string) {
    if (typeof a === "string" && typeof b === "string") {
        return parseFloat(a) + parseFloat(b);
    } else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    } else {
        return "Impossível realizar a soma!";
    }
}

console.log(sum("15", "23"));
console.log(sum(12, 23));
console.log(sum("5", 3));

// 2 - Checando se valor existe
function operations(arr: number[], operation?: string | undefined) {
    if (operation) {
        if (operation === "sum") {
            const sum = arr.reduce((i, total) => i + total);
            return sum;
        } else if (operation === "multiply") {
            const multiply = arr.reduce((i, total) => i * total);
            return multiply;
        } else {
            return "Por favor, defina uma operação";
        }
    }
}

console.log(operations([1, 2, 3]));
console.log(operations([1, 2, 3], "sum"));
console.log(operations([2, 4, 8], "multiply"));

// 3 -  Operador instanceof
class User {
    name;
    constructor(name: string) {
        this.name = name;
    }
}

class SuperUser extends User {
    constructor(name: string) {
        super(name);
    }
}

const jhon = new User("Jhon");
const paul = new SuperUser("Paul");

console.log(jhon);
console.log(paul);

function userGreeting(user: object) {
    if (user instanceof SuperUser) {
        return `Olá ${user.name}, deseja ver os dados do sistema?`;
    } else if (user instanceof User) {
        return `Olá ${user.name}`;
    }
}

console.log(userGreeting(jhon));
console.log(userGreeting(paul));

// 4 - Operador in
class Dog {
    name;
    breed;
    constructor(name: string, breed?: string) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}

const turca = new Dog("Turca");
const bob = new Dog("Bob", "Pastor Alemão");

function showDogDetails(dog: Dog) {
    if ("breed" in dog) {
        return `O cachorro é da raça ${dog.breed}`;
    } else {
        return `O cachorro é SRD`;
    }
}

console.log(showDogDetails(turca));
console.log(showDogDetails(bob));
