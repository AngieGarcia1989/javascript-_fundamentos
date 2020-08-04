const API_URL = `https://pokeapi.co/api/v2/`
const PEOPLE_URL = `pokemon/:id`
const opts = { crossDomain: true}


function obtenerPersonaje(id, callback){ 
    const Url = `${API_URL}${PEOPLE_URL.replace(`:id`, id)}`



    $.get(Url,opts,function (date){
        console.log(`hola soy ${date.name}`) })

        
if (callback){
    callback()
}

}

obtenerPersonaje(1, function(){
    obtenerPersonaje(2, function(){
        obtenerPersonaje(3, function(){
            obtenerPersonaje (4,function(){
                obtenerPersonaje(5,function(){
                    obtenerPersonaje(6,function(){
                        obtenerPersonaje(7)
                    })
                })
            

            })
        })
    })
})

