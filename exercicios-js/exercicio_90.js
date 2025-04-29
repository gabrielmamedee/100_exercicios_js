/**
 * 90 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que têm exatamente 9 caracteres.
 */

function comNoveCaracteres(array) {
    return array.filter(s => s.length === 9);
}

console.log(comNoveCaracteres(["paralelepipedo", "lua", "camaradas"]));