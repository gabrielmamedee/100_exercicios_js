/**
 * 47 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja multiplicado por 10.
 */

function multiplicaPor10(array) {
    return array.map(n => n * 10);
}

console.log(multiplicaPor10([1, 2, 3]));