let array = []
var expresion = /^[0-9]*$/i;

function ingresarElementoArreglo() {
    let validator = true;
    let i = 0;
    while (validator === true) {
        if (array[i] !== null) {
            var elemento = readLineSync.question("Ingrese un elemento: ");
            if (expresion.test(elemento)) {
                array[i] = elemento
                respuesta = readLineSync.question("¿Desea agregar otro elemento?: ")
                if (respuesta == "no") {
                    validator = false;
                }
            } else {
                console.log("Dato no valido. Favor de ingresar numeros.")
            }
        }
    }

}

function eliminarElemento() {
    respuesta = readLineSync.question("Escriba el indice del elemento que desea borrar: ")
    if (expresion.test(respuesta)) {
        try {
            for (let i = 0; i < array.length; i++) {
                if (respuesta === i) {
                    array[respuesta] = null;
                    console.log("Elemento Borrado!")
                }
                else {
                    console.log("Elemento No encontrado")
                }
            }
        } catch (e) {
            console.log("Este elemento ya no existe.")
        }
    } else {
        console.log("Favor de ingresar un elemento valido. ")
    }
}

function editarElementoArreglo() {
    respuesta = readLineSync.question("Escriba el indice del elemento que desea editar: ")
    try {
        for (let i = 0; i < array.length; i++) {
            if (respuesta === i) {
                valor = readLineSync.question("Escriba el valor a editar: ")
                array[respuesta] = valor
                console.log("Elemento Editado!")
            }
            else {
                console.log("Elemento No encontrado")
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
            if (respuesta === i) {
                console.log("Valor del elemenento " + i + " es: " + array[i])
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

}

function imprimirTodoArreglo() {
    try {
        for (let i = 0; i < array.length; i++) {
            console.log("Numero: " + array[i]);
            console.log(" ")
        }
    } catch (e) {
        console.log("Arreglo vacio")
    }

}

function imprimirSumaPromedioArreglo() {

}
