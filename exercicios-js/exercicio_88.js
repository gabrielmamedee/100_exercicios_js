/**
 * 88 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são ímpares e menores que 20.
 */

function imparesMenoresQue20(arr) {
    return arr.filter(n => n % 2 !== 0 && n < 20);
}

console.log(imparesMenoresQue20([8,19,20,32,45,17,13]));