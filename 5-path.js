/* es útil para manejar rutas de archivos y directorios de 
forma independiente de la plataforma y para realizar 
operaciones comunes de manipulación de rutas, como la 
normalización, resolución y unión de rutas. */

const path = require('path');

//creación de una ruta
const filePath = (path.join('/public', 'dist', '/styles', 'main.css'));

console.log(filePath);

//Devuelve el último componente de la ruta especificada,
//opcionalmente con una extensión especificada.
console.log(path.basename(filePath));

//Devuelve el directorio de nivel superior de la 
//ruta especificada.
console.log(path.dirname(filePath));

//analiza una ruta de archivo o directorio y devuelve un 
//objeto con información sobre sus componentes.
console.log(path.parse(filePath));

//Resuelve una ruta absoluta a partir de las rutas 
//especificadas, comenzando por el directorio actual 
//de la aplicación Node.js.
console.log(path.resolve('dist'));