/**
 * 98 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que contêm a letra "z".
 */

function contemLetraZ(arr){
    return arr.filter(s => s.includes("z"));
}

console.log(contemLetraZ(["zoro", "zaine", "gabriel"]));