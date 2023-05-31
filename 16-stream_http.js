const http = require('http');
const {createReadStream} = require('fs');

const server = http.createServer((req, res) => {
    const fileStream = createReadStream('./data/bigfile.txt', {
        encoding: 'utf-8'
    })

    /* En esta línea se registra un callback de evento para el
    stream de lectura. Cuando se lee un chunk del archivo, se 
    emite el evento "data" y se envía el chunk como argumento 
    al callback. En este caso, el callback utiliza el método 
    pipe() para enviar el chunk al objeto de respuesta 
    (response) HTTP res. El método pipe() es una forma 
    conveniente de conectar streams entre sí, en este caso 
    conectando el stream de lectura con el stream de respuesta 
    HTTP. */
    fileStream.on('data', (chunk) => {
        fileStream.pipe(res)
    })

    fileStream.on('error', error => {
        console.log(error)
    })
})

server.listen(3000);
console.log('server en puerto 3000');