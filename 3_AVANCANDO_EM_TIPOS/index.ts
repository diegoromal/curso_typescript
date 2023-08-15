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
