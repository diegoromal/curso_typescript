/*
Elabore um algoritmo que leia dois números e imprima qual é maior, qual é menor, ou se são iguais
*/

let num1 = prompt("Informe o primeiro número: ");
let num2 = prompt("Informe o segundo número: ");

if (num1 > num2) {
    console.log("O primeiro número é maior!");
} else if (num1 < num2) {
    console.log("O segundo número é maior!");
} else {
    console.log("Os números são iguais!");
}
