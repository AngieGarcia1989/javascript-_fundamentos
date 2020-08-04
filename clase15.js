var contador = 0
var frecuencia;
const llueve  = () => Math.random () < 0.25

do {
contador++
}while (!llueve())
if (contador === 1) {
    console.log(`fui a ver si llovia ${contador} vez`) 
   
}

if (contador > 1){
    console.log(`fui a ver si llovia ${contador} veces`)
}
