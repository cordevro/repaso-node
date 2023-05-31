/* En Node.js, un evento (event) es una señal que indica
que algo ha sucedido en el entorno de tiempo de ejecución 
de Node.js. Los eventos en Node.js son manejados a través 
del módulo de eventos (EventEmitter).
*/
const EventEmitter = require('events');
const customEmmiter = new EventEmitter();

//se pueden enviar más datos, (data, data2, data3) solo es cuestión
//de que por consola los muestres a la hora de emitirlos para que
//se vean emit(1, 2, 3)
customEmmiter.on('response', (data) => {
    console.log('received');
    console.log(data);
});

customEmmiter.emit('response', 'hola mundo');
customEmmiter.emit('response', 'angel');
customEmmiter.emit('response', 23);
customEmmiter.emit('response', [1,2,3]);
customEmmiter.emit('response', {angel: "ryan"});