/**
 * 99 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja multiplicado por 8.
 */

function multiplicarPor8(arr){
    return arr.map(n => n * 8);
}

console.log(multiplicarPor8([1,2,3]));