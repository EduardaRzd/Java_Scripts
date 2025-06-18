const prompt = require ('prompt-sync')()

let resposta = null
let soma = 0
let contador = 0

while (resposta != 0){
    resposta = Number(prompt('Digite as médias e para calcular digite 0:  '))

    soma += resposta
    contador ++
}

let mediafinal = soma/contador

console.log(mediafinal)
