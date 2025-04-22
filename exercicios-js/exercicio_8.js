/**
 * 8 - Faça um script que contenha um array chamado notas, esse array armazena 3 notas de um aluno. O programa deve imprimir:

A primeira nota do aluno é: …
A segunda nota do aluno é: …
A terceira nota do aluno é: …
A média do aluno é: …
O aluno está: APROVADO ou REPROVADO (APROVADO quando a média for maior ou igual a 7).
 */

const notas = [7, 6, 6]

const media = notas.reduce((acc, n) => acc + n, 0) / notas.length;

const resultado = media >= 7 ? "APROVADO" : "REPROVADO";

console.log(`A primeira nota do aluno é: ${notas[0]}`);
console.log(`A segunda nota do aluno é: ${notas[1]}`);
console.log(`A terceira nota do aluno é: ${notas[2]}`);
console.log(`A média do aluno é: ${media.toFixed(1)}`);
console.log(`O aluno está: ${resultado}`);