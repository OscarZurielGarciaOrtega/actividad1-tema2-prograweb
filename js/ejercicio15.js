<<<<<<< HEAD

let estudiantes = [];

function agregarAlumno(){
    let nom = document.getElementById("nombre").value;
    let cal = document.getElementById("calificacion").value;


if(nom === "" || cal === ""){
    alert("Por favor, llena el nombre y la calificación.")
    return;
}

estudiantes.push({
    nombre: nom,
    calificacion: parseFloat(cal)
});

document.getElementById("nombre").value = "";
document.getElementById("calificacion").value = "";

alert("Alumno" + nom + " agregado correctamente.")
}


function calcularPromedio() {
   
    if (estudiantes.length === 0) {
        alert("Primero debes agregar al menos un alumno.");
        return;
    }

  
    let arregloCalificaciones = estudiantes.map(e => e.calificacion);

    
    let maximo = Math.max(...arregloCalificaciones);
    let minimo = Math.min(...arregloCalificaciones);

    
    let suma = arregloCalificaciones.reduce((acc, valor) => acc + valor, 0);
    let prom = suma / arregloCalificaciones.length;

    
    
    let alumnoMasAlto = estudiantes.find(e => e.calificacion === maximo).nombre;
    let alumnoMasBajo = estudiantes.find(e => e.calificacion === minimo).nombre;

    document.getElementById("masAlto").value = "Estudiante con la calificación más alta: " + alumnoMasAlto;
    document.getElementById("masBajo").value = "Estudiante con la calificación más baja: " + alumnoMasBajo;
   
    document.getElementById("promedio").value = "Calificación promedio " + prom.toFixed(2); 
=======

let estudiantes = [];

function agregarAlumno(){
    let nom = document.getElementById("nombre").value;
    let cal = document.getElementById("calificacion").value;


if(nom === "" || cal === ""){
    alert("Por favor, llena el nombre y la calificación.")
    return;
}

estudiantes.push({
    nombre: nom,
    calificacion: parseFloat(cal)
});

document.getElementById("nombre").value = "";
document.getElementById("calificacion").value = "";

alert("Alumno" + nom + " agregado correctamente.")
}


function calcularPromedio() {
   
    if (estudiantes.length === 0) {
        alert("Primero debes agregar al menos un alumno.");
        return;
    }

  
    let arregloCalificaciones = estudiantes.map(e => e.calificacion);

    
    let maximo = Math.max(...arregloCalificaciones);
    let minimo = Math.min(...arregloCalificaciones);

    
    let suma = arregloCalificaciones.reduce((acc, valor) => acc + valor, 0);
    let prom = suma / arregloCalificaciones.length;

    
    
    let alumnoMasAlto = estudiantes.find(e => e.calificacion === maximo).nombre;
    let alumnoMasBajo = estudiantes.find(e => e.calificacion === minimo).nombre;

    document.getElementById("masAlto").value = "Estudiante con la calificación más alta: " + alumnoMasAlto;
    document.getElementById("masBajo").value = "Estudiante con la calificación más baja: " + alumnoMasBajo;
   
    document.getElementById("promedio").value = "Calificación promedio " + prom.toFixed(2); 
>>>>>>> 4f9b9a1e672d16588f4591f014d950df7014db9b
}