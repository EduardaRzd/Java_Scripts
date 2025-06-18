// Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require ('prompt-sync') ()

let nota = Number (prompt("Digite a nota de 0 a 10: "))

if (nota > 5 && nota == 10){
    console.log("Aprovado")
}
else if (nota < 5){
    console.log("Reprovado")
}

else {
    console.log("Nota inválida")
}