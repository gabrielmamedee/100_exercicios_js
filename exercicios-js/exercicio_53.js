/**
 * 53 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha as vogais removidas. Utilize a função `replace()` para remover as vogais.
 */

function removendoVogais(array) {
    return array.map(s => s.replace(/[aeiouAEIOU]/g, ""));
}

console.log(removendoVogais(["Gabriel", "Alicia", "Bento"]));