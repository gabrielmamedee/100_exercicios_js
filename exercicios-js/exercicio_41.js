/**
 * 41 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha a primeira letra em maiúscula. Utilize a função toUpperCase() para converter a primeira letra.
 */

function primeiraMaiuscula(array) {
    return array.map(s => s.charAt(0).toUpperCase() + s.slice(1))
}

console.log(primeiraMaiuscula(["banana", "laranja", "uva"]));


