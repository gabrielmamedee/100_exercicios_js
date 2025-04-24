/**
 * 32 - Crie um script que declare um array de objetos, onde cada objeto representa um aluno e possui as propriedades nome, idade e notas (um array de números). Utilize a função map() para criar um novo array contendo apenas os nomes dos alunos. Imprima o novo array.
 */

const alunos = [
    {
        nome: "Gabriel",
        idade: "26",
        notas: [7, 7, 6.5, 8]
    },
    {
        nome: "Alicia",
        idade: "27",
        notas: [10, 9, 8, 9.5]
    }
];

const nomeAlunos = alunos.map(aluno => aluno.nome);
console.log(nomeAlunos);