/**
 * 20 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne a média dos números do array.
 */

function calculaMedia(array) {
    return array.reduce((acc, n) => acc + n, 0) / array.length;
}

console.log(calculaMedia([7, 7, 7]));