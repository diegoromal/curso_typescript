// 1 - Primeiro decorator
function myDecorator() {
    console.log("Iniciando decorator!");
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log("Executando decorator");
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    };
}
class myClass {
    @myDecorator()
    testing() {
        console.log("terminando a execução do método");
    }
}

const myObj = new myClass();
myObj.testing();

// 2 - Múltiplos decorators
function a() {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log("executou a");
    };
}
function b() {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log("executou b");
    };
}
function c() {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log("executou c");
    };
}
class MultipleDecorators {
    @c()
    @a()
    @b()
    testing() {
        console.log("Terminando a execução");
    }
}
const multiple = new MultipleDecorators();
multiple.testing();

// 3 - Decorator de classe
function classDec(constructor: Function) {
    console.log(constructor.name);
    if (constructor.name === "User") {
        console.log("Criando usuário");
    }
}
@classDec
class User {
    name;
    constructor(name: string) {
        this.name = name;
    }
}
const matheus = new User("Matheus");
console.log(matheus);

// 4 - Decorator de método
function enumerable(value: boolean) {
    return function (
        target: any,
        properKey: string,
        descriptor: PropertyDescriptor
    ) {
        descriptor.enumerable = value;
    };
}
class Machine {
    name;
    constructor(name: string) {
        this.name = name;
    }
    @enumerable(false)
    showName() {
        console.log(this);
        return `O nome da máquina é ${this.name}`;
    }
}
const trator = new Machine("Trator");
console.log(trator.showName());

// 5 - Accessor decorator
class Monster {
    name?;
    age?;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    @enumerable(true)
    get showName() {
        return `Nome do monstro: ${this.name}`;
    }
    @enumerable(false)
    get showAge() {
        return `Idade do monstro: ${this.age}`;
    }
}
const charmander = new Monster("Charmander", 10);
console.log(charmander);

// 6 - Property decorator
function formatNumber() {
    return function (target: object, properKey: string) {
        let value: string;
        const getter = function () {
            return value;
        };
        const setter = function (newVal: string) {
            value = newVal.padStart(5, "0");
        };
        Object.defineProperty(target, properKey, {
            set: setter,
            get: getter,
        });
    };
}
class ID {
    @formatNumber()
    id;
    constructor(id: string) {
        this.id = id;
    }
}
const newItem = new ID("1");
console.log(newItem);
console.log(newItem.id);

// 7 - Exemplo real: Class Decorator
function createdDate(created: Function) {
    created.prototype.createdAt = new Date();
}
@createdDate
class Book {
    id;
    createdAt?: Date;
    constructor(id: number) {
        this.id = id;
    }
}
@createdDate
class Pen {
    id;
    createdAt?: Date;
    constructor(id: number) {
        this.id = id;
    }
}
const newBook = new Book(12);
const newPen = new Pen(13);
console.log(newBook);
console.log(newBook.createdAt);
console.log(newPen);

// 8 - Exemplo real: Method Decorator
function checkIfUserPost() {
    return function (
        target: Object,
        key: string | Symbol,
        descriptor: PropertyDescriptor
    ) {
        const childFunction = descriptor.value;
        console.log(childFunction);
        descriptor.value = function (...args: any[]) {
            if (args[1] === true) {
                console.log("Usuário já postou");
                return null;
            } else {
                return childFunction.apply(this, args);
            }
        };
        return descriptor;
    };
}

class Post {
    alreadyPosted = false;
    @checkIfUserPost()
    post(content: string, alreadyPosted: boolean) {
        this.alreadyPosted = true;
        console.log(`Post do usuário: ${content}`);
    }
}

const newPost = new Post();
newPost.post("Meu primeiro post", newPost.alreadyPosted);
newPost.post("Meu segundo post", newPost.alreadyPosted);

// 9 - Exemplo real: Property Decorator
function Max(limit: number) {
    return function (target: object, propertyKey: string) {
        let value: string;
        const getter = function () {
            return value;
        };
        const setter = function (newVal: string) {
            if (newVal.length > limit) {
                console.log(`O valor deve ter no máximo ${limit} dígitos.`);
            } else {
                value = newVal;
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
        });
    };
}
class Admin {
    @Max(10)
    username;
    constructor(username: string) {
        this.username = username;
    }
}
let pedro = new Admin("pedroadmin12345");
let lee = new Admin("lee");
console.log(lee);
console.log(lee.username);
