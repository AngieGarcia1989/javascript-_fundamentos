var sacha = {
    nombre: "angie",
    apellido: "garcia",
    edad: 30,
    drone: true,
    peso: 75}

    console.log(`Al inicio del año ${sacha.nombre} pesa ${sacha.peso}kg`)

  //function AumentarDePeso (persona) {
    //  return persona.peso += 200
  //}
  const incremento_peso = 0.2
  const AumentarDePeso = (persona) => persona.peso += incremento_peso
  const Adelgazar = (persona) => persona.peso -= incremento_peso
  
    for (var i= 1; i <= 365; i++){
var random = Math.random()

if (random < 0.25){
    AumentarDePeso (sacha)
} else if (random < 0.5){
    Adelgazar (sacha)
}
    }


    console.log(`Al final del año ${sacha.nombre} pesa ${sacha.peso.toFixed(1)}kg`)