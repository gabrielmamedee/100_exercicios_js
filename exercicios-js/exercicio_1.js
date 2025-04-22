/**
 * 1 - Crie um script que tenha três variáveis:

var nome;
let sobreNome;
const cpf;

nome e cpf devem estar em um escopo global. sobreNome deve estar dentro de uma função. A execução do programa deve imprimir o nome completo na ordem correta (com quebra de linha): Nome Sobrenome CPF. Outra linha com uma mensagem concatenando os valores.
 */

const cpf = "123.123.123-12";
var nome = "Gabriel";

function sobreNome() {
    return "Mamede"
}

console.log(nome);
console.log(sobreNome());
console.log(cpf);
console.log(`Nome: ${nome}, Sobrenome: ${sobreNome()}, CPF: ${cpf}`);


