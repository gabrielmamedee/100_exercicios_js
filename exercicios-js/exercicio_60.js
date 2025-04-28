/**
 * 60 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são divisíveis por 7.
 */

function divisiveisPor7(array) {
    return array.filter(n => n % 7 === 0);
}

console.log(divisiveisPor7([7,8,9,14,28,32]));