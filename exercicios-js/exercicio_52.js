/**
 * 52 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são menores que 50.
 */

function menoresQue50(array) {
    return array.filter(n => n < 50);
}

console.log(menoresQue50([1,10,30,60,80,20]));