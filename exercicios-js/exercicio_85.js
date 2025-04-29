/**
 * 85 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array

 onde cada string tenha as consoantes duplicadas. Utilize a função `replace()` para duplicar as consoantes.
 */

function duplicarConsoantes(array) {
    return array.map(s => s.replace(/[^aeiou\s\d\W_]/gi, c => c + c))
}

console.log(duplicarConsoantes(["banana", "uva"]));