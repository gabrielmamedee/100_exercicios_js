/**
 * 71 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja incrementado em 3.
 */

function incrementar3(arr){
    return arr.map(n => n + 3);
}

console.log(incrementar3([1,2,3]));