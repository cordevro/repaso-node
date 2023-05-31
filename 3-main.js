/* const web = require('./module/3.1-myModule');
//extracción exacta de los elementos
const {myArray, myNumber, myWebAddress, user} = require('./module/myModule');

console.log(web);
console.log(myArray);
console.log(myNumber);
console.log(myWebAddress);
console.log(user); */

//importación de modulos
const math = require('./math/3.2-index');


console.log(math);
console.log(math.add(10, 20));
console.log(math.substract(10, 20));
console.log(math.multiply(10, 20));
console.log(math.divide(10, 20));