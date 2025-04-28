/**
 * 44 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são divisíveis por 2.
 */

function divisiveisPor2(array) {
    return array.filter(n => n % 2 === 0);
}

console.log(divisiveisPor2([1, 2, 3, 4, 5, 6]));