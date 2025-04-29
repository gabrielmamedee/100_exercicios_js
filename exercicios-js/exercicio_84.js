/**
 * 84 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são maiores que 25.
 */

function maioresQue25(array) {
    return array.filter(n => n > 25);
}

console.log(maioresQue25([1,2,3,4,5,6,7,25,26]));