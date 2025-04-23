/**
 * 16 - Crie um script que declare um array de números e utilize um loop while para calcular a soma de todos os números do array. Imprima o resultado.
 */

const numeros = [7, 2, 6, 10, 1, 9, 6, 5, 13, 21];
let i = 0;
let soma = 0;
while(i < numeros.length){
    soma += numeros[i];
    i++
}

console.log(soma);