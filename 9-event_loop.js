/* Un event loop en Node.js es una estructura de programación que 
permite manejar múltiples solicitudes y operaciones de manera 
asíncrona sin bloquear el proceso principal de la aplicación. 
En lugar de esperar a que cada operación se complete antes de 
continuar con la siguiente, el event loop permite que la aplicación 
continúe ejecutando otras tareas mientras espera la finalización 
de cada operación. De esta manera, Node.js puede manejar una gran 
cantidad de solicitudes de manera eficiente y escalable. */

const http = require('http');

const server = http.createServer((req, res)=>{

    if(req.url === '/') {
        res.write('welcome to the server')
        return res.end()
    }

    if(req.url === '/about') {
        
        //tarea que bloquea todo el hilo de javascript
        for(let i = 0; i < 100000; i++) {
            console.log(Math.random() * i)
        }

        return res.end("about page")

    }

    res.end('not found')

})

server.listen(3000)
console.log("puerto 3000 on")