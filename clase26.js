const API_URL = `https://pokeapi.co/api/v2/`
const PEOPLE_URL = `pokemon/:id`

const bulbasaurUrl = `${API_URL}${PEOPLE_URL.replace(`:id`, 1)}`
const opts = { crossDomain: true}

const onresponse = function (date){
console.log(`hola soy ${date.name}`) }



$.get(bulbasaurUrl,opts,onresponse)