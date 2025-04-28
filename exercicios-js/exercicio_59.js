/**
 * 59 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja elevado ao cubo.
 */

function elevarAoCubo(array) {
    return array.map(n => Math.pow(n, 3));
    //return array.map(n => n ** 3);
}

console.log(elevarAoCubo([2, 3, 4]));