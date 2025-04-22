/**
 * 9 - Escreva um programa que imprima os números de 1 a 100. Mas, para múltiplos de 3, imprima "Fizz" em vez do número e, para múltiplos de 5, imprima "Buzz". Para números que são múltiplos de ambos 3 e 5, imprima "FizzBuzz".
 */

for(i = 1; i <= 100; i++){
    const numero = i;
    if (numero % 3 === 0 && numero % 5 === 0){
        console.log("FizzBuzz");
    } else if (numero % 3 === 0) {
        console.log("Fizz");
    } else if (numero % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(numero);
    }
}