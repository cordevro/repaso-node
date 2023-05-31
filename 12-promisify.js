/* En Node.js, la función promisify es una utilidad
 proporcionada por el módulo "util" que convierte
  una función basada en devoluciones de llamada
   (callbacks) en una función que devuelve una promesa. */

const {readFile} = require('fs')
const {promisify} = require('util')

const readFilePromise = promisify(readFile);


async function read() {
    try {
        // throw new Error('Esto es un error que no se esperaba')
        const result = await readFilePromise('./data/first.txt', 'utf-8');
        const result2 = await readFilePromise('./data/second.txt', 'utf-8');
        const result3 = await readFilePromise('./data/third.txt', 'utf-8');
        const result4 = await readFilePromise('./data/four.txt', 'utf-8');

        console.log(result);
        console.log(result2);
        console.log(result3);
        console.log(result4);
    } catch (error) {
        console.log(error)
    }
}

read();