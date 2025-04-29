/**
 * 86 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que começam com a letra "D".
 */

function comecaComD(array) {
    return array.filter(s => s.startsWith("D"));
}

console.log(comecaComD(["DAVI", "BENTO"]));