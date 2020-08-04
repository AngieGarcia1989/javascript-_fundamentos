const API_URL = `https://pokeapi.co/api/v2/`
const PEOPLE_URL = `pokemon/:id`
const opts = { crossDomain: true}

function obtenerPersonaje(id){
    return new Promise((resolve,reject) => {

   const url = `${API_URL}${PEOPLE_URL.replace(`:id`,id)}` 

 $
.get(url,opts,function (data){
    resolve (data)
})

.fail(()=> reject(id))
})
}  
   


function onError(id) {
    console.log(`sucedio un error al obtener el personaje ${id}`)
}
var ids = [1,2,3,4,5,6,7]

// var promesas = ids.map(function(id){
//     return obtenerPersonaje(id)
// })
var promesas = ids.map(id => obtenerPersonaje (id))
Promise
.all(promesas)
.then (personajes => console.log(personajes))
.catch(onError)


// obtenerPersonaje(1)
//     .then (personaje => { 
//     console.log(`el personaje 1 es ${personaje.name}`)
// return obtenerPersonaje(2)
// })
// .then (personaje => { 
//     console.log(`el personaje 2 es ${personaje.name}`)
// return obtenerPersonaje(3)
// })
// .then (personaje => { 
//     console.log(`el personaje 3 es ${personaje.name}`)
// return obtenerPersonaje(4)
// .then (personaje => { 
//     console.log(`el personaje 4 es ${personaje.name}`)
// return obtenerPersonaje(5)
// .then (personaje => { 
//     console.log(`el personaje 5 es ${personaje.name}`)
// return obtenerPersonaje(6)
// .then (personaje => { 
//     console.log(`el personaje 6 es ${personaje.name}`)
// return obtenerPersonaje(7)
// })
// })
// })
// })

// .catch(onError)


// Múltiples promesas en paralelo
// Para hacer el llamado a múltiples promesas, nos apoyamos en un array de ids con el que luego construimos otro arreglo de Promesas, que pasaremos como parámetro a Promise.all( arregloDePromesas ), con las promesas podemos encadenar llamadas en paralelo, algo que no es posible usando callbacks.