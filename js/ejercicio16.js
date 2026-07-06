
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;


const calcularOperacion = (operacion) => {
    
    const input1 = document.getElementById('numero1').value;
    const input2 = document.getElementById('numero2').value;

   
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    
    if (input1.trim() === '' || input2.trim() === '' || isNaN(num1) || isNaN(num2)) {
        alert("Ingresa números válidos.")
        return; 
    }

    let resultadoFinal = 0;

   
    switch (operacion) {
        case 'suma':
            resultadoFinal = sumar(num1, num2);
            break;
        case 'resta':
            resultadoFinal = restar(num1, num2);
            break;
        case 'multiplicacion':
            resultadoFinal = multiplicar(num1, num2);
            break;
        case 'division':
           
            if (num2 === 0) {
                alert("Operación no permitida.")
                return;
            }
            resultadoFinal = dividir(num1, num2);
            break;
        default:
            return;
    }

    
    document.getElementById('resultado').value = resultadoFinal;
};