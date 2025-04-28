/**
 * 65 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha as consoantes removidas. Utilize a função `replace()` para remover as consoantes.
 */

function removerConsoantes(arr) {
    return arr.map(s => s.replace(/[^aeiouAEIOU]/g, ''));
}

console.log(removerConsoantes(["gabriel", "alicia"]));