<<<<<<< HEAD
function verificar(){

    var inputVal = document.getElementById("edad").value;

    if(inputVal === ""){
        alert("Por favor, ingrese una edad válida.")
        return;
    }

    var num1 = parseInt(inputVal);

    if(num1 <= 0){
        alert("Por favor, ingresa un número mayor a cero.")
        return;
    }

    if(num1 >= 18){
        document.getElementById("resultado").value = "Puedes votar.";
    }else{
        document.getElementById("resultado").value = "No puedes votar.";
    }
=======
function verificar(){

    var inputVal = document.getElementById("edad").value;

    if(inputVal === ""){
        alert("Por favor, ingrese una edad válida.")
        return;
    }

    var num1 = parseInt(inputVal);

    if(num1 <= 0){
        alert("Por favor, ingresa un número mayor a cero.")
        return;
    }

    if(num1 >= 18){
        document.getElementById("resultado").value = "Puedes votar.";
    }else{
        document.getElementById("resultado").value = "No puedes votar.";
    }
>>>>>>> 4f9b9a1e672d16588f4591f014d950df7014db9b
}