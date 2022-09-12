const readLineSync = require('readline-sync')
var modules = require('./Methods.js')
let userRes;

while (userRes !== '0') {
    try{
    console.log("1. INGRESAR ELEMENTO EN ARREGLO")
    console.log("2. ELIMINAR UN ELEMENTO EN EL ARREGLO ")
    console.log("3. EDITAR UN ELEMENTO EN EL ARREGLO")
    console.log("4. BUSCAR ELEMENTO")
    console.log("5. IMPRIMIR DADO UN INDICE")
    console.log("6. IMPRIMIR TODO EL ARREGLO")
    console.log("7. IMPRIMIR SUMA y PROMEDIO")
    console.log("8. SALIR")
    userRes = readLineSync.question("Seleciona una opcion: ");
    if (userRes === '1') {
        modules.ingresarElementoArreglo()
    } else if (userRes === '2') {
        modules.eliminarElemento();
    } else if (userRes === '3') {
        modules.editarElementoArreglo()
    }else if (userRes === '4') {
        modules.buscarElementoArreglo()
    }else if (userRes === '5') {
       modules.buscarElementoArreglo();
    }else if (userRes === '6') {
        modules.imprimirTodoArreglo(array)
    } else if (userRes === '7') {
        modules.imprimirSumaPromedioArreglo();
        
    }
    else if (userRes === '8') {
        console.log("Hasta luego!")
        process.exit()
    }
    else{
        console.log("Caracter no identificado. Favor de corregirlo.")
    }
    }catch (e){
        console.log("Opcion no encontrada.")
    }
}