/**
 * 51 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja incrementado em 5.
 */

function incrementa5(array) {
    return array.map(n => n + 5);
}

console.log(incrementa5([1,2,3]));