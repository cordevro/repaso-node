const myWebAddress = "google.com";
const myNumber = 30;
const myArray = [10, 20, 30];
const user = {
    name: 'ryan',
    lastname: 'ray'
};

//puede escribir el nombre de la const solamente también
const group = {
    myWebAddress: myWebAddress,
    myNumber: myNumber,
    myArray: myArray,
    user: user
}

// module.exports = myWebAddress;
//también se puede guardar el objeto directamente
module.exports = group;

//exports individuales
module.exports.user = user;
module.exports.myNumber = myNumber;
module.exports.myArray= myArray;


//ver datos del modulo del archivo
// console.log(module);