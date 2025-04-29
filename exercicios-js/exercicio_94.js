/**
 * 94 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que contêm a letra "y".
 */

function contemLetraY(arr) {
    return arr.filter(s => s.includes("y"));
}

console.log(contemLetraY(["yan", "Ian", "Emilly"]));