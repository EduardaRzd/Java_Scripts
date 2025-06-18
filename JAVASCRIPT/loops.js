// // const prompt = require ('prompt-sync')()

// // let contadora = 1

// // let num = Number(prompt('Digite um número: '))

// // while (contadora <11){

// //     console.log (`${num} x ${contadora} = ${num * contadora}`)
// //     contadora++
// // }

// let contadora = 10

// while (contadora >=0) {

//     console.log(contadora)
//     contadora--
// }


// const prompt = require ('prompt-sync')()

// let num = Number(prompt('Digite um número: '))

// for (let contadora = 0; contadora <=10; contadora++){
//     console.log(`${number} x ${contadora} = ${number * contadora}`)
// }

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


