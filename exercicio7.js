//As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
//forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
//compradas, calcule e escreva o valor total da compra.

const prompt = require ('prompt-sync')()

let mc = Number (prompt("Digite o número de maças compradas: "))

if (mc<=12){
    console.log(mc*0.30)
}

else {
    console.log(mc*0.25)
}