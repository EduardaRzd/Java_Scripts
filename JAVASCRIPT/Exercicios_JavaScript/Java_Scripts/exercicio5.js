// Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

const prompt = require ('prompt-sync')()

let peso = Number (prompt("Digite seu peso: "))
let altura = Number (prompt("Digite sua altura em centímetros: "))

let imc = peso / (altura * altura)

if (imc < 18.5){
    console.log("Baixo peso")
}

else if (imc >= 18.5 && imc <= 24.99){
    console.log("Peso normal")
}
else if (imc >= 25.00 && imc <= 29.99){
    console.log("Sobrepeso")
}
else {
    console.log("Obesidade")
}

console.log("IMC: ", imc)