// //Crie um programa que classifica a idade de uma pessoa em categorias (criança,
// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
// controle if-else.

const prompt = require ('prompt-sync')()

let idade = Number(prompt('Digite sua idade: '))

if (idade >=0 && idade <=12){
    console.log('Criança')
}

else if(idade >13 && idade <=17){
    console.log('Adolescente')
}
else if(idade >=18 && idade <=59){
    console.log('Adulto')
}

else {
    console.log('Idoso')

}