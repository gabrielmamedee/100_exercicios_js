/**
 * 70 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que têm mais de 7 caracteres.
 */

function maisDe7Caracteres(arr) {
    return arr.filter(s => s.length > 7);
}

console.log(maisDe7Caracteres(["Gabriela", "Janderlir", "bento"]));