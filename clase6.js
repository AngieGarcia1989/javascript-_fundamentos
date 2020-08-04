var angie = {
nombre: "angie",
apellido: "garcia",
edad:30
 }

var dario = {
nombre:"dario",
apellido:"gomez",
edad:40
 }



function imprimirNombreyEdad(persona) {
    var nombre = persona.nombre
    var edad = persona.edad
  console.log(`hola me llamo ${nombre} y tengo ${edad} años`);
}

imprimirNombreyEdad(angie)
imprimirNombreyEdad(dario)


//function cumpleaños(persona) {
  //persona.edad += 1  }


function cumpleaños(persona) {
  return 
    { 
      ...persona,

edad: persona.edad + 1  }
}