/**
 * 73 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha as vogais duplicadas. Utilize a função `replace()` para duplicar as vogais.
 */

function duplicarVogais(arr) {
    return arr.map(s => s.replace(/[aeiou]/gi, (v) => v + v));
}

console.log(duplicarVogais(["Bento", "Alicia"]));