/**
 * 95 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja elevado à quinta potência.
 */

function elevadoQuinta (arr) {
    return arr.map(n => Math.pow(n, 5));
}

console.log(elevadoQuinta([1,2,3,4,5,6,7,8,9,10]));