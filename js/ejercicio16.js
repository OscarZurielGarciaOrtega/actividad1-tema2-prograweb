
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
        Swal.fire({
            icon: 'error',
            title: 'Entrada inválida',
            text: 'Por favor, ingresa números válidos en ambos campos.',
            confirmButtonColor: '#007bff'
        });
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
                Swal.fire({
                    icon: 'warning',
                    title: 'Operación no permitida',
                    text: 'Error: No se puede dividir entre cero.',
                    confirmButtonColor: '#007bff'
                });
                return;
            }
            resultadoFinal = dividir(num1, num2);
            break;
        default:
            return;
    }

    
    document.getElementById('resultado').value = resultadoFinal;
};