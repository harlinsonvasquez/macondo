


const estudiante={
    nombre:undefined,
    edad: undefined,
    familia:undefined,
    linaje:undefined,
    casa:undefined,
    animal:undefined,
    cualidades:undefined
}

let nombre=prompt("ingresa tu nombre")
estudiante.nombre=nombre;
let edad=Number.parseInt(prompt("ingresa tu edad"))
estudiante.edad=edad;
let familia=prompt("ingresa tu familia")
estudiante.familia=familia;
let linaje=prompt("elije una opcion :\n1.mestizo:\n2.muggle:\n3.sangre pura")
switch(linaje){
    case "1":
        estudiante.linaje="mestizo";
        break;
    case "2":
        estudiante.linaje="muggle"
        break;
    case "3":
        estudiante.linaje="sangre pura"
        break;
    default:
        console.log("opcion no valida")
}

let cualidades=prompt("elije una opcion :\n1.Valor, fuerza, audacia:\n2.justicia, Lealtad, Paciencia:\n3.Creatividad, Erudición, Inteligencia:\n4.Ambición, Determinación, Astucia")
switch(linaje){
    case "1":
        estudiante.cualidades="Valor, fuerza, audacia";
        break;
    case "2":
        estudiante.cualidades="justicia, Lealtad, Paciencia";
        break;
    case "3":
        estudiante.cualidades="Creatividad, Erudición, Inteligencia"
        break;
    case "4":
        estudiante.cualidades="Ambición, Determinación, Astucia"
        break;
    default:
        console.log("opcion no valida")
}


const clases ={
    trasnformaciones:'kevin slughorn',
    herbologia:'maria umbridge',
    pociones:'liliana mcgonagall',
    encantamientos:'jackie',
    defensaArtesOscuras:'robinson snape',
    animalesMagicos:'david filch',
    historiaMagia:'ronald sprout'
}

const casas ={
    casa1:'griffindor',
    casa2:'hufflepuff',
    casa3:'ravenclaw',
    casa4:'slytherin'
}

if(estudiante.cualidades=="valor,fuerza,audacia" && estudiante.linaje=="mestizo"|| estudiante.linaje=="muggle"||estudiante.linaje=="sangre pura"){
    estudiante.casa=casas.casa1
    
}else if(estudiante.cualidades=="justicia,lealtad,paciencia" && estudiante.linaje=="mestizo"|| estudiante.linaje=="muggle"){
    estudiante.casa=casas.casa2
    
}else if(estudiante.cualidades=="creatividad,erudicion,inteligencia" && estudiante.linaje=="mestizo"|| estudiante.linaje=="muggle"||estudiante.linaje=="sangre pura"){
    estudiante.casa=casas.casa3
    
}else if(estudiante.cualidades=="ambicion,determinacion,astucia" && estudiante.linaje=="sangre pura"){
    estudiante.casa=casas.casa4}
else{
    console.log("la casa y el linaje no son validos")
}


const claseTransformaciones = {
    materia: 'transformaciones',
    profe: 'kevin slughorn',
    horario: '9:30 am',
    boggarts: 'abejas',
    antiboggarts:'cachorros de perritos',
    
    realizarTransformacionRiddikulus: function() {
      if (this.boggarts !== undefined) {
        this.boggarts = this.antiboggarts;
        console.log(this.boggarts);
      }else{
        console.log("no hay boggart con propiedades")
      }
    },

    enfrentarBoggart:function(boggarts){
        console.log(`se enfrentan el boggarts ${this.boggarts} contra el antiboggarts ${this.antiboggarts}`)

    }
  };
  
  // Llamando al método del objeto claseTransformaciones
  claseTransformaciones.enfrentarBoggart();
  claseTransformaciones.realizarTransformacionRiddikulus();

  const boggartEjemplo ={

    boggarts:'leon'
   

  }/*
  boggartEjemplo.boggarts=claseTransformaciones.realizarTransformacionRiddikulus;

  boggartEjemplo.boggarts();
  console.log(boggartEjemplo.boggarts)*/
  claseTransformaciones.enfrentarBoggart(boggartEjemplo.boggarts)

  let efensaContraLasArtesOscuras ={
    animal1:'ciervo',
    animal2:'lobo',
    animal3:'raton',
    animal4:'perro'
  }
  let indiceAleatorio=Math.floor(Math.random()*4)+1;
  let propiedadAleatoria = "animal" + indiceAleatorio;

  estudiante.animal=efensaContraLasArtesOscuras[propiedadAleatoria];
  console.log(estudiante.animal)
  //estudiante.animal=undefined;

  function dementor(){
    if(estudiante.animal!==undefined){
        console.log(`su animal patronus ${estudiante.animal} vencio el dementor`)
    }else{
        console.log("el estudiante no tenia animal patronus fue absorbido y llevado a enfermeria")
    }

  }
  dementor();
  console.table(estudiante)
