/**
 * 50 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que têm exatamente 4 caracteres.
 */

function retornar4Caracteres(array) {
    return array.filter(s => s.length === 4);
}

console.log(retornar4Caracteres(["Bento", "Guga", "Gabriel", "Biel"]));