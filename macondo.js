/*let opcion = prompt("Elige una opción:\n1. almojaba con gaseosa Valor:15.000\n2. subway con gaseosa Valor:23.000\n3. no deseas comprar nada");
let salario=2500000;
switch (opcion) {
  case "1":
    console.log("te caera mal porque lleva mucho en el stand");
    salario=salario-15000;
    break;
  case "2":
    console.log("estaras llenito y bien ");
    salario=salario-23000;
    break;
  case "3":
    console.log("te tocara comprar algo en medellin");
    break;
  default:
    console.log("Opción no válida");
}
console.log("tu saldo disponible del salario es",salario);


//maletas

let medidasMaleta={
    alto:55,
    largo:40,
    ancho:20

};

let MaletaPasajero={
    alto:60,
    largo:40,
    ancho:20

};





let minimoAlto=(medidasMaleta.alto/MaletaPasajero.alto)
//let minimoLargo=(MaletaPasajero.largo/medidasMaleta.largo)
//let minimoAncho=(MaletaPasajero.ancho/medidasMaleta.ancho)
//console.log(minimoAlto)

let minimoFactor=Math.min(minimoAlto);
console.log(minimoFactor)

let nuevoAlto= MaletaPasajero.alto*minimoFactor;
let nuevoLargo = MaletaPasajero.largo* minimoFactor;
let nuevoAncho=MaletaPasajero.ancho*minimoFactor;
nuevoAlto=Math.floor(nuevoAlto);
nuevoLargo=Math.floor(nuevoLargo);
nuevoAncho=Math.floor(nuevoAncho);


let nuevasDimensiones={
    alto:nuevoAlto,
    largo:nuevoLargo,
    ancho:nuevoAncho

};
console.log(nuevasDimensiones);

if(
    nuevasDimensiones.alto<=medidasMaleta.alto &&
    nuevasDimensiones.largo<=medidasMaleta.largo &&
    nuevasDimensiones.ancho<=medidasMaleta.ancho
){
    console.log("las medidas de la maleta cumplen con los criterios establecidos por el areopuerto")
}
else {
    console.log("Las nuevas dimensiones exceden las medidas permitidas.");
  }


  
  let valorMinuto=50000/60;
  let claveBinaria="01110010_01101001_01110111_01101001";


function binarios(binario){
    let claveBinaria=binario.split('_');//metodo para separar cada numero con un guion


    let caracteres=claveBinaria.map(binario=>{//funcion flecha para recorrer todos los binarios
        let decimal=parseInt(binario, 2);//convertir binario a decimal
        return String.fromCharCode(decimal);//convertir decimal a caracter
    });

    return caracteres.join('');//metodo para unir todo y retornar los caracteres juntos
}
let decodificado=binarios(claveBinaria);

console.log("las clave del wifi es : " + "" + decodificado);

let valorInternet=Number.parseInt(prompt("cuantos minutos de internet gastaste"));

let totalInternet=valorInternet*valorMinuto;
salario=salario-totalInternet;

console.log("tu saldo disponible del salario es",salario);

  

let taxi="Taxi me puede llevar al hotel mariposas amarillas";

let conlaI=taxi.replace(/[aeou]/g,'i')
console.log(conlaI)
let salario=2500000;
let taxista=prompt("Taxiste Elige una opción:\n1. piedra  \n2.papel  \n3.tijera")

let hildebrando=prompt("Hildebrando Elige una opción:\n1. piedra  \n2.papel  \n3.tijera")

if(taxista==1 && hildebrando==3 || (taxista==3 && hildebrando==2)|| (taxista==2 && hildebrando==1)){
    console.log("hildebrando perdiste debes pagar 300.000")
    salario=salario-300000;
    
}
else if(taxista==1 && hildebrando==2||(hildebrando==3 && taxista==2)||(hildebrando==1 &&taxista==3)){
    console.log("hildebrando ganaste no debes pagar 300.000")

}
else if(taxista==1 && hildebrando==1||(taxista==2 && hildebrando==2)||(taxista==3&& hildebrando==3)){
    console.log("fue empate no pasa nada")
}
else{
    console.log("palabra invalida")
}
console.log("el nuevo saldo del salario es " + salario);*/

let dia=1;
let aunVive=true;
let salario=2500000;

while(aunVive=){
    let vestimenta=prompt("escoja la bestimenta segun la activida que deseas \n1. amarillo \n2.verde \n3.rojo \n4. azul ")
    if(vestimenta==1){
        console.log("te bañaras en la piscina pero vas a morir y terminaran tus vacaciones")
        aunVive=false;
    }
    else if(vestimenta==2){
        let caminata=prompt("deseas realizar la caminata completa \n1.si \n2.no ")
        if(caminata==1){
            console.log("disfruta de la hermosa cascada y toma fotos")
        }else{
            console.log("te perdiste y ya es de noche")
        }
        
    }
    else if(vestimenta==3){
        let actividades=prompt("que actividad deseas realizar\n1.voleibol en la playa \n2.nadar en el mar y montar moto \n3. tomar coctel y terminar en el hospital ")
        if(actividades==1){
            console.log("la pàsaste genial")
        }else if(actividades==2){
            console.log("que buena nadada y montada en moto")
        }
        else{
            console.log("se terminaron las vacaciones")
            aunVive=false;
        }
    }
    else if(vestimenta==4){
        let actividades=prompt("que actividad deseas realizar\n1.jugar bingo \n2.bailar \n3. jugar al casino ")
        if(actividades==1){
            let montoBingo=300000;
            salario=salario+montoBingo;
            console.log("felicidades ganaste un premio tu saldo actual es:" + salario)
        }
        else if(actividades==2){
            console.log("que buena bailada")
        }
        else{
            console.log("lo siento perdiste tu dinero en el casino")
            aunVive=false
        }

    }
    dia++;
        console.log("dia :" + dia + "de vacaciones")
        console.log("saldo de salario es :" + salario)

}