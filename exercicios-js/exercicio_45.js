/**
 * 45 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string esteja em letras maiúsculas e invertida.
 */

function maiusculasInvertidas(array) {
    return array.map(s => s.split("").reverse().join("").toUpperCase());
}

console.log(maiusculasInvertidas(["gabriel", "banana"]));