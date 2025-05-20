/*Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while.*/

const prompt = require('prompt-sync')();

let num = Number(prompt("Digite um número para calcular o fatorial: "));
let fatorial = 1;
let contador = num;

while (contador > 1) {
    fatorial *= contador;
    contador--;
}

console.log(`O fatorial de ${num} é ${fatorial}`);
