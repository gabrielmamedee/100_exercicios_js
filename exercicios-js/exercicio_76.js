/**
 * 76 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são múltiplos de 6.
 */

function multiplosDe6(arr) {
    return arr.filter(n => n % 6 === 0);
}

console.log(multiplosDe6([1,2,3,4,5,6,78,12,24]));