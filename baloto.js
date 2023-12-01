
/*let arraybaloto=[];
let arrayString=[];
for (let i=0; i<2; i++){

    let numeros=prompt("ingrese los numeros del baloto sin espacios")

   
    arraybaloto.push(numeros)
    arrayString=arraybaloto.toString();

}

let parejas = [];
for (let i = 0; i <= arraybaloto.length; i += 2) {
    parejas.push(arraybaloto.substring(i, i + 2)); // Obtener las parejas de dígitos
}

console.log(arraybaloto)
console.log(arrayString)
console.log(parejas)*/





// Función para separar un número de 10 dígitos en parejas de 2
function separarEnParejas(numero) {
    let numeroComoString = numero.toString(); // Convertir el número a cadena

    if (numeroComoString.length !== 10) {
        return "El número debe tener 10 dígitos.";
    }

    let parejas = [];
    for (let i = 0; i < numeroComoString.length; i += 2) {
        parejas.push(numeroComoString.substring(i, i + 2)); // Obtener las parejas de dígitos
    }

    return parejas;
}

// Ejemplo de uso:
let miArray = [];
for (let i=0; i<2; i++){

    let numeros=prompt("ingrese los numeros del baloto sin espacios")

   
    miArray.push(numeros)
   

}

let arrayParejas = miArray.map(numero => separarEnParejas(numero));

console.log('Array original:', miArray);
console.log('Array con números separados en parejas:', arrayParejas);



function obtenerParejasRepetidas(arrayParejas) {
    let conteo = {};

    // Contar la frecuencia de cada pareja
    arrayParejas.forEach(arrayPareja=> {
        conteo[arrayPareja] = (conteo[arrayPareja] || 0) + 1;
    });

    let pares = Object.entries(conteo);

    // Ordenar por frecuencia de mayor a menor
    pares.sort((a, b) => b[1] - a[1]);

    return {
        masRepetida: pares[0], // La pareja más repetida
        menosRepetida: pares[pares.length - 1] // La pareja menos repetida
    };
}


let { masRepetida, menosRepetida } = obtenerParejasRepetidas(arrayParejas);

console.log('Pareja más repetida:', masRepetida);
console.log('Pareja menos repetida:', menosRepetida);
/*function obtenerParejasRepetidas(parejas) {
    let conteo = {};

    // Contar la frecuencia de cada pareja
    parejas.forEach(pareja => {
        conteo[pareja] = (conteo[pareja] || 0) + 1;
    });

    let pares = Object.entries(conteo);

    // Ordenar por frecuencia de mayor a menor
    pares.sort((a, b) => b[1] - a[1]);

    return {
        masRepetida: pares[0], // La pareja más repetida
        menosRepetida: pares[pares.length - 1] // La pareja menos repetida
    };
}

// Ejemplo de uso:
let parejas = ['12', '34', '56', '12', '34', '78', '12', '34', '34','12'];

let { masRepetida, menosRepetida } = obtenerParejasRepetidas(parejas);

console.log('Pareja más repetida:', masRepetida);
console.log('Pareja menos repetida:', menosRepetida);*/
