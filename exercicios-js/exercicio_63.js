/**
 * 63 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja decrementado em 2.
 */

function decrementar2(arr) {
    return arr.map(n => n -= 2);
}

console.log(decrementar2([2,3,4,5,6,7,8]));