/**
 * 18 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne o maior número do array. Utilize a função Math.max() para encontrar o maior número.
 */

const numeros = [30, 4, 48];

function retornaMaior(array) {
    return Math.max(...array);
}

console.log(retornaMaior(numeros));