/**
 * 48 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são ímpares.
 */

function retornaImpares(array) {
    return array.filter(n => n % 2 !== 0);
}

console.log(retornaImpares([1, 2, 3, 4, 5]));