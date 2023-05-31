/* el módulo fs/promises proporciona una API de sistema
 de archivos basada en promesas que puede hacer que 
 el código asíncrono sea más fácil de leer y escribir. */

const {readFile} = require("fs/promises");

async function read() {
    try {
        // throw new Error('Esto es un error que no se esperaba')
        const result = await readFile('./data/first.txt', 'utf-8');
        const result2 = await readFile('./data/second.txt', 'utf-8');
        const result3 = await readFile('./data/third.txt', 'utf-8');
        const result4 = await readFile('./data/four.txt', 'utf-8');

        console.log(result);
        console.log(result2);
        console.log(result3);
        console.log(result4);
    } catch (error) {
        console.log(error)
    }
}

read();