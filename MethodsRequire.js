let array = []
var expresion = /^[0-9]*$/i;

function ingresarElementoArreglo() {
    let validator = true;
    let i = 0;
    while (validator === true) {
        if(array[i] !== null){
        var elemento = readLineSync.question("Ingrese un elemento: ");
        if (expresion.test(elemento)) {
            array[i] = elemento
            respuesta = readLineSync.question("¿Desea agregar otro elemento?: ")
            if (respuesta == "no") {
                validator = false;
            }
            i++;
        } else {
            console.log("Dato no valido. Favor de ingresar numeros.")
        }
    } else {
        var elemento = readLineSync.question("Ingrese un elemento: ");
        if (expresion.test(elemento)) {
            numbers.splice(i, 0, elemento);
            respuesta = readLineSync.question("¿Desea agregar otro elemento?: ")
            if (respuesta == "no") {
                validator = false;
            }
            i++;
        } else {
            console.log("Dato no valido. Favor de ingresar numeros.")
        }
    }
    }
}

function eliminarElemento() {
    respuesta = readLineSync.question("Escriba el indice del elemento que desea borrar: ")
    try {
        for (let i = 0; i < array.length; i++) {
            if (respuesta == i) {
                array[respuesta] = null;
                console.log("Elemento Borrado!")
            }
        }
    } catch (e) {
        console.log("Este elemento ya no existe.")
    }
}

function editarElementoArreglo() {
    respuesta = readLineSync.question("Escriba el indice del elemento que desea editar: ")
    try {
        for (let i = 0; i < array.length; i++) {
            if (respuesta == i) {
                valor = readLineSync.question("Escriba el valor a editar: ")
                array[respuesta] = valor
                console.log("Elemento Editado!")
            }
        }
    } catch (e) {
        console.log("Este elemento ya no existe.")
    }
}

function buscarElementoArreglo() {
    respuesta = readLineSync.question("Escriba el elemento que quiera buscar: ")
    try {
        for (let i = 0; i < array.length; i++) {
            if (respuesta == array[i]) {
                console.log("Valor del elemenento " + i + " es: " + array[i])
                return array[i];
            }
            else {
                console.log("Elemento No encontrado")
            }
        }
    } catch (e) {
        console.log("Este elemento ya no existe.")
    }
}

function imprimirElementoPorIndiceArreglo() {
    var datos = buscarElementoArreglo();
    respuesta = readLineSync.question("¿Desea imprimir sus datos en un archivo de texto?")
    try {
        if (respuesta == "si") {
            valor = readLineSync.question("Introdusca la posicion del valor a buscar: ")
            for (let i = 0; i < array.length; i++) {
                if (valor == i) {
                    console.log("Valor del elemenento " + i + " es: " + array[i])
                    return array[i];
                }
                else {
                    console.log("Elemento No encontrado")
                }
            }
            let archivo = require('fs')
            let data = JSON.stringify(valor)
            archivo.writeFile("arreglos.txt", data, (err) => {
                if (err)
                  console.log(err);
                else {
                  console.log("Arreglo guardado exitoso.\n");
                  console.log(fs.readFileSync("arreglos.txt", "utf8"));
                }
              });

        }
        else {
            console.log(datos)
        }
    } catch (e) {
        console.log("Arreglo vacio")
    }

}

function imprimirTodoArreglo(array) {
    try {
        respuesta = readLineSync.question("¿Desea imprimir sus datos en un archivo de texto?")
        if (respuesta == "si") {
            let archivo = require('fs')
            let data = JSON.stringify(array)
            archivo.writeFile("arreglos.txt", data, (err) => {
                if (err)
                  console.log(err);
                else {
                  console.log("Arreglo guardado exitoso.\n");
                  console.log(fs.readFileSync("arreglos.txt", "utf8"));
                }
              });

        } else {
            for (let i = 0; i < array.length; i++) {
                console.log("Numero: " + array[i]);
                console.log(" ")
            }
        }
    } catch (e) {
        console.log("Arreglo vacio")
    }

}

function imprimirSumaPromedioArreglo() {
    try {
        respuesta = readLineSync.question("¿Desea imprimir sus datos en un archivo de texto?")
        if (respuesta == "si") {
            const sum = array.reduce((a, b) => a + b, 0)
            let archivo = require('fs')
            let data = JSON.stringify(array)
            archivo.writeFile("arreglos.txt", sum, (err) => {
                if (err)
                  console.log(err);
                else {
                  console.log("Arreglo guardado exitoso.\n");
                  console.log(fs.readFileSync("arreglos.txt", "utf8"));
                }
              });

            
            

        } else {
            console.log("Suma total: "+array.reduce((a, b) => a + b, 0))
        }
    } catch (e) {
        console.log("Arreglo vacio")
    }
}
