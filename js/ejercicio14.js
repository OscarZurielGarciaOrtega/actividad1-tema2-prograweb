<<<<<<< HEAD
function calculo(){
    let cadena = document.getElementById("numeros").value;

    if(cadena === ""){
        alert("Por favor, ingresa una cadena de números");
        return;
    }
    let arreglo = cadena.split(",");
    let numeros = arreglo.map(Number);
    let maximo = Math.max(...numeros);
    let minimo = Math.min(...numeros);

    let suma = numeros.reduce((acc, valor) => acc + valor,0);
    let promedio = suma/numeros.length;

    document.getElementById("numMayor").value = "Numero mayor = " + maximo;
    document.getElementById("numMenor").value = "Numero menor = " + minimo;
    document.getElementById("promedio").value = "Promedio = " + promedio;
}
=======
function calculo(){
    let cadena = document.getElementById("numeros").value;

    if(cadena === ""){
        alert("Por favor, ingresa una cadena de números");
        return;
    }
    let arreglo = cadena.split(",");
    let numeros = arreglo.map(Number);
    let maximo = Math.max(...numeros);
    let minimo = Math.min(...numeros);

    let suma = numeros.reduce((acc, valor) => acc + valor,0);
    let promedio = suma/numeros.length;

    document.getElementById("numMayor").value = "Numero mayor = " + maximo;
    document.getElementById("numMenor").value = "Numero menor = " + minimo;
    document.getElementById("promedio").value = "Promedio = " + promedio;
}
>>>>>>> 4f9b9a1e672d16588f4591f014d950df7014db9b
