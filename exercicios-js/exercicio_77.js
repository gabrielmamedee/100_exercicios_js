/**
 * 77 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha todas as letras em maiúscula e invertida.
 */

function maiusculaInvertida(arr) {
    return arr.map(s => s.toUpperCase().split('').reverse().join(''));
}

console.log(maiusculaInvertida(["Gabriel", "Alicia"]));