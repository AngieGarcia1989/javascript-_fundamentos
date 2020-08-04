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
  const DIAS_DEL_AÑO = 365
  const incremento_peso = 0.2
  const AumentarDePeso = (persona) => persona.peso += incremento_peso
  const Adelgazar = (persona) => persona.peso -= incremento_peso
  const META = sacha.peso - 3
const ComeMucho = () => Math.random () < 0.3
const RealizaDeporte =() => Math.random () < 0.4
var dias = 0 
  while (sacha.peso > META) {
      if (ComeMucho()) {
          AumentarDePeso(sacha)
      }
      if (RealizaDeporte()) {
          Adelgazar(sacha)
      }
      dias += 1 
  }


    console.log(`Pasaron ${dias} dias hasta que ${sacha.nombre} adelgazo 3kg`)