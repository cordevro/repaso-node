/* En Node.js, un stream (flujo) es una secuencia de datos (bits)
que se mueven continuamente en un flujo unidireccional, es decir, 
que se leen o se escriben sin almacenarse en su totalidad en memoria.

Los streams permiten leer o escribir datos de forma eficiente, ya que 
se pueden procesar los datos en pequeños fragmentos, reduciendo así la 
cantidad de memoria necesaria para almacenarlos. Además, el uso de 
streams hace que las operaciones de lectura y escritura sean más rápidas, 
ya que se realizan en tiempo real, sin tener que esperar a que se carguen 
todos los datos en memoria. */

/* const {writeFile} = require('fs/promises');

const createBigFile = async () => {
    await writeFile('./data/bigfile.txt', 'hello world'.repeat(10000));
}

createBigFile();

 */

const {createReadStream} = require('fs');

//si el archivo no existiera ocurriria un error
const stream = createReadStream('./data/bigfile.txt', {
    encoding: 'utf-8',
})

//chunk = fragmento/pedazo
stream.on('data', (chunk) => {
    console.log(chunk);
});

stream.on('end', () => {
    console.log('ya terminé de leer el archivo');
});

//muestra del error por la inexistencia del archivo
stream.on('error', (error) => {
    console.log(error);
});