/**
 * 61 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha a primeira e a última letra em maiúscula. Utilize a função `toUpperCase()` para converter as letras.
 */

function primeiraUltimaMaiuscula(array) {
    return array.map(s => s.charAt(0).toUpperCase() + s.slice(1, -1) + s.slice(-1).toUpperCase())
}

console.log(primeiraUltimaMaiuscula(["alica", "bento"]));