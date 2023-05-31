/* Async/Await es una característica de JavaScript 
que permite manejar operaciones asíncronas de 
una manera más clara y concisa. En lugar de utilizar 
callbacks o promesas encadenadas, Async/Await utiliza 
palabras clave especiales (async y await) para escribir 
código asíncrono como si fuera código síncrono. */

const {readFile} = require('fs')

const getText = (pathFile) => {
    return new Promise(function (resolve, reject) {
        readFile(pathFile, 'utf-8', (err, data) => {
            if(err) {
                reject(err)
            }
                resolve(data)
        })
    })
}

async function read() {
    try {
        // throw new Error('Esto es un error que no se esperaba')
        const result = await getText('./data/first.txt');
        const result2 = await getText('./data/second.txt');
        const result3 = await getText('./data/third.txt');
        const result4 = await getText('./data/four.txt');

        console.log(result);
        console.log(result2);
        console.log(result3);
        console.log(result4);
    } catch (error) {
        console.log(error)
    }
}

read();