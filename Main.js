const readLineSync = require('readline-sync')
let array = []
let userRes;
var expresion = /^[0-9]*$/i;

while (userRes !== '0') {
    console.log("----------------------------------")
    console.log("1. INGRESAR ELEMENTO EN ARREGLO")
    console.log("2. ELIMINAR UN ELEMENTO EN EL ARREGLO (null)")
    console.log("3. EDITAR UN ELEMENTO EN EL ARREGLO")
    console.log("4. BUSCAR ELEMENTO")
    console.log("5. IMPRIMIR DADO UN INDICE")
    console.log("6. IMPRIMIR TODO EL ARREGLO")
    console.log("7. IMPRIMIR SUMA y PROMEDIO")
    console.log("8. SALIR")
    userRes = readLineSync.question("Seleciona una opcion: ");
    console.log("----------------------------------")
    if (userRes === '1') {
        ingresarElementoArreglo()
    } else if (userRes === '2') {
        eliminarElemento()
    } else if (userRes === '3') {
        editarElementoArreglo()
    } else if (userRes === '4') {
        buscarElementoArreglo()
    } else if (userRes === '5') {
        imprimirElementoPorIndiceArreglo()
    } else if (userRes === '6') {
        imprimirTodoArreglo(array)
    } else if (userRes === '7') {
        imprimirSumaPromedioArreglo()
    }
    else if (userRes === '8') {
        console.log("Hasta luego!")
        process.exit()
    }
    else {
        console.log("Caracter no identificado. Favor de corregirlo.")
    }
}

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
            var fso = CreateObject("Scripting.FileSystemObject");
            var s = fso.CreateTextFile("C:/test.txt", true);
            s.writeline(datos);
            s.Close();
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
            var fso = CreateObject("Scripting.FileSystemObject");
            var s = fso.CreateTextFile("C:/test.txt", true);

            for (let i = 0; i < array.length; i++) {
                s.writeline(array[i]);
            }
            s.Close();

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
            var fso = CreateObject("Scripting.FileSystemObject");
            var s = fso.CreateTextFile("C:/test.txt", true);

            const sum = array.reduce((a, b) => a + b, 0)
            s.writeline(sum);
            s.Close();

        } else {
            console.log("Suma total: "+array.reduce((a, b) => a + b, 0))
        }
    } catch (e) {
        console.log("Arreglo vacio")
    }
}
