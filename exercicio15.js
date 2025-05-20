/*Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for.*/


let anterior = 0;
let atual = 1;

console.log("Os 10 primeiros números da sequência de Fibonacci são:");

for (let i = 0; i < 10; i++) {
    console.log(anterior);

    let proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
}
