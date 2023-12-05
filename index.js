

const estudiante={
    nombre:'harlinson',
    edad: 30,
    familia:'vasquez casanova',
    linaje:'sangre pura',
    casa:undefined,
    animal:undefined,
    cualidades:'ambicion,determinacion,astucia'
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
      }
    },

    enfrentarBoggart:function(boggarts){
        console.log(`se enfrentan el boggarts ${this.boggarts} contra el antiboggarts ${this.antiboggarts}`)

    }
  };
  
  // Llamando al método del objeto claseTransformaciones
  claseTransformaciones.enfrentarBoggart();
  claseTransformaciones.realizarTransformacionRiddikulus();