/**
 * 19 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne o menor número do array. Utilize a função Math.min() para encontrar o menor número.
 */

function retornaMenor(array){
    return Math.min(...array);
}

console.log(retornaMenor([2, 1, 39]));