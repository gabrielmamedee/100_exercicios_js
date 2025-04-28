/**
 * 55 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja dividido por 2.
 */

function dividirPor2(array) {
    return array.map(n => n / 2);
}

console.log(dividirPor2([2,4,3,7,6,5,8]));