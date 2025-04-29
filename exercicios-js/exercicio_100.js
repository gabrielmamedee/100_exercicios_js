/**
 * 100 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são divisíveis por 10.
 */

function divisiveisPor10(arr) {
    return arr.filter(n => n % 10 === 0)
}

console.log(divisiveisPor10([10, 15, 20, 50, 33]));