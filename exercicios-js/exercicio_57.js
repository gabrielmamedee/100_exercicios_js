/**
 * 57 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string esteja em letras minúsculas e invertida.
 */

function minusculasInvertidas(array) {
    return array.map(s => s.toLowerCase().split('').reverse().join(''))
}

console.log(minusculasInvertidas(["GABRIEL", "BENTO"]));