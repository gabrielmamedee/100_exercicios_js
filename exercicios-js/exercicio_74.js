/**
 * 74 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que contêm a letra "i".
 */

function contemLetraI(arr) {
    return arr.filter(s => s.includes("i"));
}

console.log(contemLetraI(["Gabriel", "Alicia", "Bento"]));