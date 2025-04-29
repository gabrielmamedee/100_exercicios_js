/**
 * 93 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha as vogais triplicadas. Utilize a função `replace()` para triplicar as vogais.
 */

function triplicarVogais(arr) {
    return arr.map(s => s.replace(/[aeiou]/gi, v => v.repeat(3)))
  }

console.log(triplicarVogais(["banana", "uva"]))
  