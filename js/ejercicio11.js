function conversion(){
    
    var num1 = document.getElementById("km").value;
     
    if(num1 === ""){
        alert("Por favor, ingresa una distancia válida.");
        return;
    }

    var m = (parseFloat(num1)) * 0.621371;

    document.getElementById("m").value = m;
}