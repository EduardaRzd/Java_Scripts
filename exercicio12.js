/*
Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
10) utilizando um loop for.
*/
let resultado
const prompt = require ('prompt-sync')()
let num = Number (prompt("Digite um número para calcular a tabuada: "))

for (i=1; i<=10; i++){
    resultado = num * i
    console.log(num,'x', i, '=', resultado)
}

