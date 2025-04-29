/**
 * 82 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que têm exatamente 8 caracteres.
 */

function comOitoCaracteres(array) {
    return array.filter(s => s.length === 8);
}

console.log(comOitoCaracteres(["gabriela", "gabriel", "bento"]));