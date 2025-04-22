/**
 * 12 - Crie um script que declare uma variável let altura e atribua a ela um valor numérico. Em seguida, declare uma função que calcule a altura ao quadrado e imprima o resultado.
 */

let altura = 3;

function calcularAltura(valorAltura) {
    return Math.pow(valorAltura, 2);
}

console.log(`${altura} ao quadrado é: ${calcularAltura(altura)}`);