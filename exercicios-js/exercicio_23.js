/**
 * 23 - Crie um script que declare um array de números e utilize a função reduce() para calcular a soma de todos os números do array. Imprima o resultado.
 */

const numeros = [10, 22, 31, 23, 56, 48];

const soma = numeros.reduce((acc, n) => acc + n, 0);

console.log(soma);