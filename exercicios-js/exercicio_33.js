/**
 * 33 - Crie um script que declare um array de objetos, onde cada objeto representa um aluno e possui as propriedades nome, idade e notas (um array de números). Utilize a função filter() para criar um novo array contendo apenas os alunos com idade maior ou igual a 18 anos. Imprima o novo array.
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
]

const alunosMaiores = alunos.filter(aluno => aluno.idade >= 18);

console.log(alunosMaiores);