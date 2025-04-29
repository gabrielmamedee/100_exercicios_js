/**
 * 81 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha a primeira letra em maiúscula e a última letra em minúscula. Utilize a função `toUpperCase()` e `toLowerCase()` para converter as letras.
 */

function primeiraMaiusculaUltimaMinuscula(array) {
    return array.map(s => s.charAt(0).toUpperCase() + s.slice(1, -1) + s.slice(-1).toLowerCase())
}

console.log(primeiraMaiusculaUltimaMinuscula(["banana", "UVA"]));

