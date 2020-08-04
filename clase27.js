const API_URL = `https://pokeapi.co/api/v2/`
const PEOPLE_URL = `pokemon/:id`
const opts = { crossDomain: true}

const Url = `${API_URL}${PEOPLE_URL.replace(`:id`, 1)}`


const onresponse = function (date){
console.log(`hola soy ${date.name}`) }

function obtenerPersonaje(id){ 
    const Url = `${API_URL}${PEOPLE_URL.replace(`:id`, id)}`
    $.get(Url,opts,onresponse)

}

obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(2)

// el asincronismo aquie es muy notorio ya que no aparecen en el orden que pedimos los nombres
//los trae no en el mismo orden que pedimos , podeos hacer un for y no lo a a traer en el orden
// por ejemplo los primeros 100 pokemos, los trae pero no en orden 