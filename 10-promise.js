/* una promesa es un objeto que representa el resultado 
eventual (éxito o fallo) de una operación asíncrona. 
Las promesas se utilizan para manejar la ejecución de 
código asíncrono de manera más clara y concisa que el 
uso de devoluciones de llamada (callbacks) anidadas. */

const {readFile} = require('fs')

//inicio de la promesa
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

getText('./data/four.txt')
    //manejo del resultado o error
    .then((result) => console.log(result))
    .then(() => getText('./data/firsta.txt'))
    .then((result) => console.log(result))
    .catch(error => console.log(error))