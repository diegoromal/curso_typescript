// 1 - Importando arquivos
import { importGreet } from "./greet";
importGreet();

// 2 - Importando variáveis
import { x } from "./variable";
console.log(x);

// 3 - Múltiplas importações
import { a, b, myFunction } from "./multiple";
console.log(a);
console.log(b);
myFunction();

// 4 - Alias para importações
import { someName as name } from "./changename";
console.log(name);

// 5 - Importando tudo
import * as myNumbers from "./numbers";
console.log(myNumbers);
console.log(myNumbers.n1);
myNumbers.showNumber();

// 6 - Importando tipos
import { Human } from "./mytype";
class User implements Human {
    name;
    age;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
const joao = new User("João", 25);
console.log(joao);
