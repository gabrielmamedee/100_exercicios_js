/**
 * 87 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja multiplicado por 4.
 */

function multiplicarPor4(array) {
    return array.map(n => n * 4);
}

console.log(multiplicarPor4([1,2,3,4]));