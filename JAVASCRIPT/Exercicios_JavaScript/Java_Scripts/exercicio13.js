/*
Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.
*/

const prompt = require("prompt-sync")();

let soma = 0;
let cont = 0;
let num;

do {
    num = Number(prompt("Digite um número (0 para encerrar): "));

    if (num !== 0) {
        soma += num;
        cont++;
    }

} while (num !== 0);

if (cont > 0) {
    let media = soma / cont;
    console.log(`A média aritmética dos ${cont} números é ${media}`);
} else {
    console.log("Nenhum número foi digitado para calcular a média.");
}
