
const prompt = require('prompt-sync')();

let numero = Number(prompt("Ingresa un número para calcular su factorial: "));

if (!Number.isInteger(numero) || numero < 0) {
    console.log("Error: Debes ingresar un número entero positivo o cero");
} else {

    let factorial = 1;

    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    console.log(`El factorial de ${numero} es: ${factorial}`);
}