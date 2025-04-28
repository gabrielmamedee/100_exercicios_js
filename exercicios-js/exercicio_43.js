/**
 * 43 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja multiplicado por 3.
 */

function multiplicarPor3(array) {
    return array.map(n => n * 3);
}

console.log(multiplicarPor3([1,2,3]));