/**
 * 36 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são múltiplos de 5.
 */

function mutiplosDeCinco(array) {
    return array.filter(n => n % 5 === 0);
}

console.log(mutiplosDeCinco([3,4,5,6,7,8,9,10,11,12,13,14,15]));