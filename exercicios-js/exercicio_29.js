/**
 * 29 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que começam com a letra "A".
 */

function retornaLetraA(array){
    return array.filter(s => s.startsWith("A"));
}

console.log(retornaLetraA(["Alicia", "aurelia", "Andrade", "Mamede"]));