/**
 * 10 - Refaça o exercício anterior utilizando .map(). Para criar um array com números de 1 a 100:
 */

const numeros = Array.from({ length: 100 }, (_, i) => i + 1);
numeros.map(n => {
    if (n % 15 === 0) console.log("FizzBuzz")
    else if (n % 3 === 0) console.log("Fizz")
    else if (n % 5 === 0) console.log("Buzz")
    else console.log(n)
})