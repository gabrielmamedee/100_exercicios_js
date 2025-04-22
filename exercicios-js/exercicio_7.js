/**
 * 7 - Crie um script que combine o uso de objetos literais, arrays e cálculos simples para armazenar e manipular informações pessoais e acadêmicas de uma pessoa. O script deve realizar as seguintes tarefas:

- nome: O nome do aluno.
- cpf: O CPF do aluno.
- cidade: A cidade onde o aluno mora.
- notas: Um array com 4 notas do aluno.
  Imprima o nome, CPF e cidade do aluno. Imprima cada uma das notas do array notas. Calcule a média das notas do aluno e imprima. Selecione uma das notas aleatoriamente, convertê-la de uma escala de 0-10 para uma escala de 0-100 (nota convertida = nota × 10). Utilize a sintaxe notas[Math.floor(Math.random() * notas.length)] para selecionar uma nota aleatória do array. Utilize template literals para a concatenação de strings.
 */

  let aluno = {
    nome: "Gabriel",
    cpf: "123.123.123-12",
    cidade: "João Pessoa",
    notas: [10, 7.5, 8.4, 9.2]
  };

  const media = aluno.notas.reduce((acc, n) => acc + n, 0) / aluno.notas.length
  const notaAleatoria = aluno.notas[Math.floor(Math.random() * aluno.notas.length)]
  const notaConvertida = notaAleatoria * 10

  console.log(`Nome: ${aluno.nome} - CPF: ${aluno.cpf} - Cidade: ${aluno.cidade}`);
  console.log(`1º nota: ${aluno.notas[0]} \n2º nota: ${aluno.notas[1]} \n3º nota: ${aluno.notas[2]} \n4º nota: ${aluno.notas[3]}`);
  console.log(`Média: ${media.toFixed(2)}`);
  console.log(`Nota Convertida: ${notaConvertida}`);