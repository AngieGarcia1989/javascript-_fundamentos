var sacha = {
    nombre: "angie",
    apellido: "garcia",
    edad: 30,
    drone: true
}
if (persona.drone){
    console.log("piloto de drone")
}


function imprimirEdad(persona){
    console.log(`${persona.nombre} es:`)

    if (persona.edad >= 18){
        console.log(`mayor de edad`)  }
    else {
            console.log(`es menor de edad`)
        }
    
}
imprimirEdad(sacha)