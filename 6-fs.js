/* proporciona una serie de funciones para interactuar con 
el sistema de archivos del sistema operativo. Estas 
funciones incluyen operaciones para leer, escribir, 
actualizar, borrar y mover archivos y directorios, y 
se pueden usar para construir aplicaciones que interactúen 
con archivos y directorios en el sistema de archivos. */

//sincrono
/* const fs = require('fs');

//leyendo archivos y almacenarlos en constantes
const first = fs.readFileSync('./data/first.txt', 'utf-8');
const second = fs.readFileSync('./data/second.txt');

console.log(first);
console.log(second.toString());

//escribiendo archivo //crearlo
fs.writeFileSync('./data/third.txt', 'este es un tercer archivo');

const title = " añadir más";

//agregando (no sobreescribir) datos al archivo
fs.writeFileSync('./data/four.txt', title, {
    flag: 'a'
}); */


//asincrono
const fs = require('fs');

fs.readFile('./data/first.txt', 'utf-8', (error, data) => {
    if(error){
        console.log(error);
    }
    console.log(data);

    fs.readFile('./data/second.txt', 'utf-8', (error, data) => {
        if(error){
            console.log(error);
        }
        console.log(data);

        fs.writeFile('./data/newFile.txt', 'nuevo archivo con wf asincrono', (err, data) => {
            console.log(err);
            console.log(data);
        })
    })
});