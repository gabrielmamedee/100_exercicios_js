/**
 * 58 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que contêm a letra "o".
 */

function contemLetraO (arr) {
    return arr.filter(s => s.includes("o"));
}

console.log(contemLetraO(["gabriel", "Alicia", "Bento", "Monica", "Belmiro"]));