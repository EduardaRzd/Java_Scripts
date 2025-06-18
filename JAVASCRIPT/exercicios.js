//transformar graus celsius em fahrenheit

const prompt = require ('prompt-sync') ()


let celsius = Number(prompt('Digite a temperatura em celsius para transformar em fahrenheit:  '))

let f = (celsius * 9/5) + 32

let result = f

console.log("A tempetura é: ", result)
