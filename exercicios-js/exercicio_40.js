/**
 * 40 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são maiores que 10.
 */

function maioresQueDez(array) {
    return array.filter(n => n > 10);
}

console.log(maioresQueDez([1,3,33,10,40]));