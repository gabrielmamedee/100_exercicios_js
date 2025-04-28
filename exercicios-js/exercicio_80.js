/**
 * 80 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são divisíveis por 8.
 */

function divisiveisPor8(arr) {
    return arr.filter(n => n % 8 === 0);
}

console.log(divisiveisPor8([1,2,3,4,5,6,7,8,9,10,11,12]));