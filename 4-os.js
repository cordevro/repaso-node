/* proporciona una serie de funciones para interactuar con el 
sistema operativo en el que se está ejecutando la aplicación 
Node.js. Este módulo proporciona información sobre el sistema 
operativo y las funciones para trabajar con el sistema de archivos. */

//exraer información del sistema operativo
const os = require('os');

//brinda información del usuario
console.log(os.userInfo())

//devuelve el tiempo de actividad del sistema en segundos. 
//Este tiempo de actividad es el tiempo que ha pasado desde 
//que se inició el sistema operativo.
console.log(os.uptime())

//Devuelve una cadena que indica el sistema operativo subyacente en el 
//que se está ejecutando la aplicación Node.js, como "darwin" para macOS 
//o "win32" para Windows.
console.log(os.platform())

//Devuelve la cantidad total de memoria en bytes en el sistema.
console.log(os.totalmem())

//Devuelve la cantidad de memoria libre en bytes en el sistema.
console.log(os.freemem())

console.table({
    os: os.platform(),
    version: os.release(),
    totalMemory: os.totalmem()
})