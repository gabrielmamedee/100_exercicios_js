/**
 * 83 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja decrementado em 4.
 */

function decrementar4(array) {
    return array.map(n => n - 4);
}

console.log(decrementar4([4, 8, 10]));