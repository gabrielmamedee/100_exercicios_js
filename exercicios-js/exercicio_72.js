/**
 * 72 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são menores que 30.
 */

function menoresQue30(arr) {
    return arr.filter(n => n < 30);
}

console.log(menoresQue30([1,2,34,54,20,21,33,30]));