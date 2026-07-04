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

}