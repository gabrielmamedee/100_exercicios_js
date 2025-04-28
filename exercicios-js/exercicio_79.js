/**
 * 79 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja multiplicado por 7.
 */

function multiplicarPor7(arr) {
    return arr.map(n => n * 7);
}

console.log(multiplicarPor7([1,2,3,4,5,6,7,8,9,10]));