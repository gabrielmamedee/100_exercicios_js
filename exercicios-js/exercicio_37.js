/**
 * 37 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string esteja invertida. Utilize a função reverse() para inverter as strings.
 */

function inverterString(array) {
    return array.map(s => s.split("").reverse().join(""));
}

console.log(inverterString(["banana", "uva", "abacaxi"]));