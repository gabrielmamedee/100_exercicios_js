/**
 * 68 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são ímpares e maiores que 15.
 */

function imparesMaioresQue15(arr) {
    return arr.filter(n => n % 2 !== 0 && n > 15);
}

console.log(imparesMaioresQue15([1,2,15,16,17,18,19,20]));