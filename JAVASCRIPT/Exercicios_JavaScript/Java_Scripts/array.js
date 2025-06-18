//crie um array chamado números contendo 10 valores numericos a sua escolha*/

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let soma = 0
let media = 0

for (let i = 0; i < numeros.length; i++) { //o length pega a quantidade do array, como se fosse i<10 ....*/
    soma += numeros [i]
}

media = soma/numeros.length

console.log(soma)
console.log(media)