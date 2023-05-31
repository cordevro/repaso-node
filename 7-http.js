/* proporciona un conjunto de clases y métodos que permiten 
interactuar con el protocolo HTTP, como crear y gestionar 
servidores, enviar y recibir solicitudes, manejar las 
cabeceras HTTP y los datos del cuerpo de la solicitud y 
respuesta. */

const http = require('http');

const server = http.createServer((request, response) => {
    console.log(request.url)

    if(request.url === '/'){
        response.write('welcome to the server')
        return response.end()
    }

    if(request.url === '/about'){
        response.write('acerca de')
        return response.end()
    }

    response.write(`
    <h1>Not Found</h1>
    <p>esta página no se encontró</p>
    <a href="/">Volver a la página principal</a>
    `
    );
    response.end();
})

server.listen(3000);

console.log('servidor en el puerto 3000');