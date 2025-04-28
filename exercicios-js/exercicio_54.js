/**
 * 54 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que começam com a letra "B".
 */

function comecaComB(array) {
    return array.filter(s => s.startsWith("B"));
}

console.log(comecaComB(["Gabreil", "Bento", "Alicia"]));