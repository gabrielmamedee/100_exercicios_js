/**
 * 96 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são múltiplos de 9.
 */

function multiplosDe9(arr) {
    return arr.filter(n => n % 9 === 0);
}

console.log(multiplosDe9([9, 18, 27, 30]));