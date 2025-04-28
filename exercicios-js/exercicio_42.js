/**
 * 42 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que têm mais de 5 caracteres.
 */

function retornaMaiorQue5(array) {
    return array.filter(s => s.length > 5);
}

console.log(retornaMaiorQue5(["Gabriel", "Bento", "Bia", "Lua", "Alicia"]));