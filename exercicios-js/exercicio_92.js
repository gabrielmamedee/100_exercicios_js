/**
 * 92 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são menores que 35.
 */

function menoresQue35(arr) {
    return arr.filter(n => n < 35);
}

console.log(menoresQue35([24,178,87,64,50,38]));