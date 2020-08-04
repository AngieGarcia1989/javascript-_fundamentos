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

obtenerPersonaje(1)
    .then (personaje => { 
    console.log(`el personaje 1 es ${personaje.name}`)
return obtenerPersonaje(2)
})
.then (personaje => { 
    console.log(`el personaje 2 es ${personaje.name}`)
return obtenerPersonaje(3)
})
.then (personaje => { 
    console.log(`el personaje 3 es ${personaje.name}`)
return obtenerPersonaje(4)
.then (personaje => { 
    console.log(`el personaje 4 es ${personaje.name}`)
return obtenerPersonaje(5)
.then (personaje => { 
    console.log(`el personaje 5 es ${personaje.name}`)
return obtenerPersonaje(6)
.then (personaje => { 
    console.log(`el personaje 6 es ${personaje.name}`)
return obtenerPersonaje(7)
})
})
})
})

.catch(onError)
// Reportar un problema
// Múltiples promesas en paralelo
// Promesas Encadenadas
// A diferencia de los callbacks en el CallbackHell, que terminan estando anidados unos dentro de otros, cuando se usan Promesas la ejecución de las llamadas no se hacen de manera anidada sino de manera encadenada, al mismo nivel una debajo de la otra, lo que hace que el código sea mucho más legible y mantenible.