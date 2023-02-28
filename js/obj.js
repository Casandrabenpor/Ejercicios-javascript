
const autores = [
    {
        nombre: "Juan",
        apellidos: "Toledano Caro",
        nickname: "juant"
    },
    {
        nombre: "Lola",
        apellidos: "Pérez Olmos",
        nickname: "lolap"
    },
    {
        nombre: "Pepe",
        apellidos: "Ybarra Alvarez",
        nickname: "pepey"
    },
    {
        nombre: "Juana",
        apellidos: "Gonzalez Martínez",
        nickname: "juanag"
    },
    {
        nombre: "Maria",
        apellidos: "Martinez Flores",
        nickname: "mariam"
    }
]
// Funcion para obtener el autor con userId del POST
function obtenerAutor(userId) {
    //variable ,porcentaje es igual  al resto de la division entre  userId y el numero total de elementos del array de autores.
    let indiceAutor = userId % autores.length;
    // devuelve el autor de la posicion indice que tiene el indiceAutor
    return autores[indiceAutor];
}

const getData = async () => {
    try {
        const response = await fetch('https://dummyjson.com/posts');
        const responseData = await response.json();

        // Crear la lista de entradas para el blog
        const blogEntries = responseData.posts.map((post) => {
            //Obtiene el autor de forma aleatoria a traves del userId
            let autor = obtenerAutor(post.userId);
            return {
                titulo: post.title,
                contenido: post.body,
                autor: autor
            };
        });

        console.log(blogEntries);
        console.log(responseData);
        
        return blogEntries;
        // Mostrar los datos
    } catch (error) {
        console.error(error);
    }
}
const insertarDatosEnTabla = async (data) => {
  const table = document.getElementById("table");
  let posts = await data;
  posts.forEach(post => {
    table.innerHTML += `<tr>
    <td>${post.titulo}</td>
    <td>${post.autor.nombre}</td>
    <td>${post.contenido}</td>
  </tr>`;
});
}
 

let data = getData();
insertarDatosEnTabla(data);
