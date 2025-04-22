/**
 * 3 - Crie um script que simule o registro de informações de um aluno. O script deve ter três variáveis:

var nomeAluno;
let curso;
const matricula;

As variáveis nomeAluno e matricula devem estar em um escopo global. A variável curso deve estar dentro de uma função. A função deve retornar uma string que concatene todas as informações do aluno em uma única linha utilizando template literals `${var}`.
 */

const matricula = "202501";
var nomeAluno = "Gabriel";

const pegarInformacoes = (valorMatricula, valorNomeAluno) => {
    let curso = "Sistemas para internet";
    return `Matricula-${valorMatricula} Nome-${valorNomeAluno} Curso-${curso}`;
};

console.log(pegarInformacoes(matricula, nomeAluno));