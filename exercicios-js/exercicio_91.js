/**
 * 91 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja incrementado em 6.
 */

function incrementar6(arr) {
    return arr.map(n => n + 6);
}

console.log(incrementar6([1,2,3,4]))