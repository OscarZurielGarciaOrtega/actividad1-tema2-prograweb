<<<<<<< HEAD
function conversion() {
    
    var num1 = document.getElementById("celsius").value;

    
    if (num1 === "") {
        alert("Por favor, ingresa una temperatura válida.");
        return; 
    }

    
    var fahrenheit = (parseFloat(num1) * 9/5) + 32;

    
    document.getElementById("fahrenheit").value = fahrenheit;
=======
function conversion() {
    
    var num1 = document.getElementById("celsius").value;

    
    if (num1 === "") {
        alert("Por favor, ingresa una temperatura válida.");
        return; 
    }

    
    var fahrenheit = (parseFloat(num1) * 9/5) + 32;

    
    document.getElementById("fahrenheit").value = fahrenheit;
>>>>>>> 4f9b9a1e672d16588f4591f014d950df7014db9b
}