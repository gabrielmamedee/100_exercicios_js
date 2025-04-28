/**
 * 75 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja elevado à quarta potência.
 */

function elevadoQuarta(arr) {
    return arr.map(n => Math.pow(n, 4));
}

console.log(elevadoQuarta([2, 3]));