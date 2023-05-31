/* no es una función nativa de Node.js, sino que es una función 
que se utiliza en el navegador web para realizar solicitudes 
HTTP a un servidor. La función fetch está disponible en la API 
Web Fetch, la cual permite realizar solicitudes HTTP utilizando 
promesas. */

//con las caracteristicas de javascript 2022 no es necesario utilizar la función
//investigar más esto en la página de fazt

async function loadData() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

loadData();