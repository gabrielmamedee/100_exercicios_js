/**
 * 46 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que contêm a letra "e".
 */

function contemLetraE(array) {
    return array.filter(s => s.includes("e"));
}

console.log(contemLetraE(["Gabriel", "Alicia"]));