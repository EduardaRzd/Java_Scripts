//Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

const prompt = require ('prompt-sync') ()

let numInt = Number (prompt("Digite um número inteiro: "))

if (numInt % 2 == 0){
    console.log('Par')
}
else {
    console.log('Impar')
}