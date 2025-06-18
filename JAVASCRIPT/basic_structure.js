// // const prompt = require ('prompt-sync')()

// // let valor1 = Number(prompt('Insira o primeiro valor: '))
// // let valor2 = Number(prompt('Insira o segundo valor: '))
// // let op = prompt ('Informe a operação desejada: (+, -, /, *): ')
// // let resultado = 0

// // /*if (op === '+') {
// //     resultado = valor1 + valor2
// // } else if (op === '-'){
// //     resultado = valor1-valor2
// // } else if (op === '*') {
// //     resultado = valor1 * valor2
// // } else if (op === '/'){
// //     if(valor2 !== 0) {
// //     resultado = valor1/valor2
// //     } else {
// //         console.log('Erro: divisão por zero')
// //         resultado = undefined
// //     }
// // } else {
// //     console.log('Operação inválida')
// //     resultado = undefined
// // }

// // if(resultado !== undefined) {
// //     console.log("Resultado: ", resultado)
// // }*/

// // switch (op){
// //     case '+': 
// //       console.log(valor1 + valor2)
// //     break

// //     case '-': 
// //       console.log(valor1 - valor2)
// //     break

// //     case '*': 
// //       console.log(valor1 * valor2)
// //     break
    
// //     case (op == '/' && valor2 == 0):
// //         console.log('Erro: divisão por zero')
// //         resultado = undefined
// //         break
// //     case '/':
// //         console.log(valor1 / valor2)
// //         break
// //     default: 
// //     console.log('Operação inválida')
// //     resultado = undefined
// //     break
// // }    

// // console.log('Resultado: ', resultado)


// //verificar se o número é positivo negativo ou zero 


// const prompt = require ('prompt-sync')()

// let valor = Number(prompt('Insira um valor: '))

// if(valor>0){
//     console.log('Positivo')
// }
// else if (valor<0) {
//     console.log('Negativo')
// }

// else {
//     console.log('Zero')
// }

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
            




