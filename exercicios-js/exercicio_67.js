/**
 * 67 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja multiplicado por 5.
 */

function multiplicarPor5 (arr) {
    return arr.map(n => n * 5);
}

console.log(multiplicarPor5([1,2,3]));