var signo = prompt ("¿Cuál es tu signo?")

switch (signo) {
    case `acuario`:
        console.log(`Elemento Aire | Planeta Saturno | Color Agua marina | Número 29 | Piedra Lapislásulis
        Se acerca el momento en que tus esfuerzos mentales y laborales te dan buen fruto y puedes ampliar tu campo de estudios. Es posible que te sientas menos libre en la relación de pareja, pero puedes dar más valor a la compañía.`)
        break
    case `piscis`:
        console.log(`Elemento Agua | Planeta Neptuno | Color Verde Oscuro | Número 12 | Piedra Aguamarina
        Ten en cuenta que en el transcurso de este mes no debes excederte en tu alimentación, así podrás disfrutar las actividades y recuperarás la vitalidad perdida. Nuevas expectativas de trabajo aparecen.`)  
        break
    case `leo` :
        console.log(` 
        Elemento Fuego | Planeta Sol | Color Naranja | Número 28 | Piedra Topacio
        Día para hacer despliegue de tu profesionalismo y diplomacia, pisar con seguridad en el mundo de tus relaciones y saber con quiénes cuentas.`) 
        break
    case `cancer`:
    case `cáncer`:    
        console.log(`Elemento Agua | Planeta Luna | Color Blanco | Número 8 | Piedra Ópalo
        En lo relacionado con el amor lo mejor es mantener los pies sobre la tierra para no sufrir desengaños. Te acercas a la posibilidad de obtener la mayor meta de tu vida; así que debes permanecer alerta.`)
        break
    case `tauro`:
        console.log(`Elemento Tierra | Planeta Venus | Color Rosado | Número 15 | Piedra Esmeralda
        Es justa y sincera la relación con tus jefes, y se debe a tu capacidad personal. Trata de lograr que tus deseos y los de tu familia no interfieran entre sí; concilia las necesidades.`)  
        break
    case `escorpion` :
    case `escorpión` :
        console.log(`Elemento Agua | Planeta Plutón | Color Rojo carmesí | Número 9 | Piedra Jaspe
        Te estás acercando a un periodo de prosperidad, pero puedes tener la tendencia a gastar más de la cuenta; anda despacio para evitar posibles problemas.`)   
        break     
    case `geminis`:
    case `géminis`:    
        console.log(`Elemento Aire | Planeta Mercurio | Color Amarillo | Número 8 | Piedra Ágata
        Con tu jovialidad convences a quienes pueden colaborar a tu realización profesional, pero interiormente sientes temor de
        no lograrlo. No te aflijas, recuerda que vas por buen camino.`)
        break  
     case `capricornio`:
        console.log(`Elemento Tierra | Planeta Saturno | Color Negro | Número 38 | Piedra Turmalina negro
        Está cerca el fruto de tu siembra y tus asuntos económicos mejoran; procura mantener una actitud optimista, sin importar los cambios que tanto te disgustan.`)
        break
    case `aries`:
        console.log(`Elemento Fuego | Planeta Marte | Color Rojo | Número 10 | Piedra Rubí
        Tienes gran facilidad para resolver conflictos, aprovecha esta circunstancia para triunfar y dar rienda suelta a tu alegría. Te llegan cambios positivos, aprovéchalos en buena forma y te sentirás bien.`)  
        break 
    case `libra`:
        console.log(`Elemento Aire | Planeta Venus | Color Azul claro | Número 9 | Piedra Peridoto
        Quizá el exceso de actividades diarias no te dé el espacio para ti y estés bajo de ánimo. ¡Ten cuidado! Tu salud puede verse afectada, así que no abuses. Pequeños inconvenientes laborales te indisponen con tus compañeros. ¡Ten paciencia!`)
        break
    case `sagitario`:
        console.log(`Elemento Fuego | Planeta Júpiter | Color Morado | Número 19 | Piedra Amatista
        ¡Puedes aprovechar tu talento y desempeñarte mejor! Renovar tus enseres, y en general el entorno si te es posible, podría atraer energías positivas. Practica ejercicios diarios.`)  
        break
    case `virgo` :
        console.log(`Elemento Tierra | Planeta Mercurio | Color Café | Número 20 | Piedra Cuarzo rosa
        Pasas por una etapa difícil, pero los astros te auguran pronto resarcimiento en tus actividades. No te conviene responsabilizar de todo a los demás, pero tampoco cargar las culpas ajenas, así que encuentra un punto medio.`) 
        break
        default:
        console.log(`No es un signo zodiacal`)
        break
}