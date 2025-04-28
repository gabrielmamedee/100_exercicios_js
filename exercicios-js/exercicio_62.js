/**
 * 62 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que têm exatamente 6 caracteres.
 */

function comSeisCaracteres(array){
    return array.filter(s => s.length === 6);
}

console.log(comSeisCaracteres(["gabriel", "alicia", "bento"]));