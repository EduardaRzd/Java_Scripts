//Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
//formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
//Isósceles, escaleno ou eqüilátero.


const prompt = require ('prompt-sync')()

let a = Number (prompt("Digita o valor de A: "))
let b = Number (prompt("Digita o valor de B: "))
let c = Number (prompt("Digita o valor de C: "))

if (a < b + c && b < a + c && c < a + b){
   if(a==b && b==c){
    console.log("Triângulo equilatero")
   }
   else if(a==b || a==c || b==c){
    console.log("Triângulo isósceles")
   }
   else {
    console.log("Triângulo escaleno")
   }
}
else {
    console.log("Medidas inválidas")
}





