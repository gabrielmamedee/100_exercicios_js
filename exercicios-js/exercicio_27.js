/**
 * 27 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja elevado ao quadrado.
 */

function numeroAoQuadrado(array) {
    return array.map(n => Math.pow(n, 2));
}

console.log(numeroAoQuadrado([2, 3, 4, 5]));