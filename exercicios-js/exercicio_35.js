/**
 * 35 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja decrementado em 1.
 */

function decrementaArray(array) {
    return array.map(n => n - 1);
};

console.log(decrementaArray([1, 2, 3]));