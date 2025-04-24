/**
 * 39 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja convertido para uma string com duas casas decimais. Utilize a função toFixed() para formatar os números.
 */

function converterEmString(array) {
    //return array.map(n => String(n.toFixed(2)));
    return array.map(n => n.toFixed(2)) // .toFixed() já converte para string
}

console.log(converterEmString([2,4,3,7,80]));