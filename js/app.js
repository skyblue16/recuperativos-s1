function rotar(arr, pasos) { //creo una funcion llamada rotar con los parametros arr y pasos
    var rotations = pasos;//le asigno a rotations = pasos , pasos es el numero 3 que sale mas abajo 
    var index; // index no tiene valor, porque por alguna razon me sale  6 6 6 y los demas nuemros, pero lo tendra valor dentro del while

    while (rotations > 0) { //rotations > 0 va a ejecuta el codigo
        index = arr.pop(); // index le asigno el valor , al arr elimino el ultimo elemento con pop
        arr.unshift(index);//agrego el elemento que pop elimino al principio

        rotations--;//va a devolver el valor antes de decrementar
    }

    return arr;
}

//ejemplo

rotar([1, 2, 3, 4, 5, 6], 3);// el ultimo son los pasos que dara en este caso numero 3
// --> returns [ 4, 5, 6, 1, 2, 3 ];

----------------------------------------------

    function returnOrdenados(array) {
        for (var i = 0; i < array.length - 1; i++) {//va arecorrer mi array
            var num1 = array[i]; // asigno valor a num1 = array[i] la posicion
            var num2 = array[i + 1];//asigno valor que al array [i] la posicion mas 1 
            if (num1 > num2) { // comparo si num1 es mayor que num2 es false , si no es true
                return false;
            }
        }
        return true;
    }
    //conclusion: Lo que hace es recorrer un arreglo, cuando encuentre un numero que sea mayor que el de la siguiente posición retornara false, sino retornara true

 console.log(returnOrdenados([3, 5, 11, 9, 15, 16])); // => false