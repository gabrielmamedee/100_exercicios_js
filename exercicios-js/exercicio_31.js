/**
 * 31 - Crie um script que declare um array de objetos, onde cada objeto representa um aluno e possui as propriedades nome, idade e notas (um array de números). Utilize um loop for para imprimir o nome de cada aluno.
 */

const alunos = [
    {
        nome: "Gabriel",
        idade: "26",
        notas: [8, 7.5, 9, 6]
    }, 
    {
        nome: "Alicia",
        idade: "27",
        notas: [6, 7.5, 3, 5]
    }]

for(i = 0; i < alunos.length; i++) {
    console.log(alunos[i].nome);
}