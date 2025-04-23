/**
 * 13 - Crie um script que declare uma variável var largura e atribua a ela um valor numérico. Declare uma função que calcule a largura ao cubo e imprima o resultado.
 */

var largura = 8;

function larguraAoCubo(valorLargura) {
    return Math.pow(largura, 3);
}

console.log(`${largura} ao cubo é: ${larguraAoCubo(largura).toFixed(2)}`);