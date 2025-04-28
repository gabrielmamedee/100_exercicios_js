/**
 * 66 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que começam com a letra "C".
 */

function comecaComC(arr) {
    return arr.filter(s => s.startsWith("C"));
}

console.log(comecaComC(["Caio", "Gabriel"]));