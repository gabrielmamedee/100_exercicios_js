/**
 * 34 - Crie um script que declare um array de objetos, onde cada objeto representa um aluno e possui as propriedades nome, idade e notas (um array de números). Utilize a função reduce() para calcular a média das idades dos alunos.

Imprima o resultado.
 */

const alunos = [
    {
        nome: "Gabriel",
        idade: "26",
        notas: [7.5, 8, 6]
    },
    {
        nome: "Alicia",
        idade: "27",
        notas: [9.8, 7, 9]
    },
    {
        nome: "Bento",
        idade: "2",
        notas: [10, 10, 10]
    }
];

const mediaIdade = alunos.reduce((acc, aluno) => acc + Number(aluno.idade), 0) / alunos.length;

console.log(mediaIdade.toFixed(2));