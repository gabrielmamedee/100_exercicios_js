/**
 * 28 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são múltiplos de 3.
 */

function multiplosDe3(array) {
    return array.filter(n => n % 3 === 0);
}

console.log(multiplosDe3([1, 2, 3, 4, 5, 6, 7, 8]));