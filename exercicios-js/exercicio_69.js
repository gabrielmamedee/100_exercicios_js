/**
 * 69 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha a primeira e a última letra em minúscula. Utilize a função `toLowerCase()` para converter as letras.
 */

function primeiraUltimaMinuscula(arr) {
    return arr.map(s => s.charAt(0).toLowerCase() + s.slice(1, -1) + s.slice(-1).toLowerCase());

}

console.log(primeiraUltimaMinuscula(["Banana", "UVA"]));