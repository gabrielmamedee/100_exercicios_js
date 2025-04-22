/**
 * 5 - Crie um script que contenha duas funções, uma usando a sintaxe tradicional e outra usando arrow function. Ambas as funções devem receber um parâmetro carreira e retornar uma string concatenada usando template literals `${var}`. Retorno: "Meu objetivo de carreira é me tornar um [parametro carreira]".
 */

function obterCarreira(carreira) {
    return `Meu objetivo de carreira é me tornar um ${carreira}`
}

const obterCarreira2 = (carreira) => `Meu objetivo de carreira é me tornar um ${carreira}`

console.log(obterCarreira("Desenvolvedor FullStack"));
console.log(obterCarreira2("Desenvolvedor Java"));