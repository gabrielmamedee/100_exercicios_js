/**
 * 78 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que contêm a letra "u".
 */

function contemLetraU(arr) {
    return arr.filter(s => s.includes("u"));
}

console.log(contemLetraU(["uva", "Banana", "Melancia"]));