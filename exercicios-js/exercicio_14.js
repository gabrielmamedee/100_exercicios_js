/**
 * 14 - Crie um script que declare uma variável const base e atribua a ela um valor numérico. Declare uma função que calcule a área de um triângulo usando a base e uma altura fornecida como parâmetro e imprima o resultado.
 */

const base = 20;

function calculaArea(valorBase, valorAltura) {
    return (valorBase * valorAltura) / 2;
}

console.log(`A área do triangulo é: ${calculaArea(base, 30).toFixed(2)}`);