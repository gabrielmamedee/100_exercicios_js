/**
 * 64 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são maiores que 20.
 */

function maioresQue20(arr) {
    return arr.filter(n => n > 20);
}

console.log(maioresQue20([1,2,3,4,8,11,19,20,21,101,34,2]));