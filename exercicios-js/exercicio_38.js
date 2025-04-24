/**
 * 38 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que terminam com a letra "a".
 */

function terminaComA(array) {
    return array.filter(s => s.endsWith("a"));
}

console.log(terminaComA(["Ana", "Lucas", "Marta", "João"]));