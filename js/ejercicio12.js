<<<<<<< HEAD
function conversion(){
    
    var inputVal = document.getElementById("pesos").value;

    if(inputVal === ""){
        alert("Por favor, ingresa una cantidad válida");
        return;
    }

    var num1 = parseFloat(inputVal);

    if(num1 <=  0){
        alert("Por favor, ingresa un valor mayor a cero.")
        return;
    }

    var dolar = num1 * 0.055;

    document.getElementById("dolar").value = dolar.toFixed(2);

=======
function conversion(){
    
    var inputVal = document.getElementById("pesos").value;

    if(inputVal === ""){
        alert("Por favor, ingresa una cantidad válida");
        return;
    }

    var num1 = parseFloat(inputVal);

    if(num1 <=  0){
        alert("Por favor, ingresa un valor mayor a cero.")
        return;
    }

    var dolar = num1 * 0.055;

    document.getElementById("dolar").value = dolar.toFixed(2);

>>>>>>> 4f9b9a1e672d16588f4591f014d950df7014db9b
}