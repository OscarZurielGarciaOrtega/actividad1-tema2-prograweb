const manejarTareas = (function() {
    
   
    const obtenerTareas = () => {
        const tareasJSON = localStorage.getItem("tareasLocal");
        return tareasJSON ? JSON.parse(tareasJSON) : [];
    };

    
    const guardarTareas = (tareas) => {
        localStorage.setItem("tareasLocal", JSON.stringify(tareas));
    };

    
    const agregarTarea = (texto) => {
        if (texto.trim() === '') {
            alert("Por favor ingresa una tarea válida."); 
            return;
        }

        const tareas = obtenerTareas();
        tareas.push({ tarea: texto, completada: false });
        guardarTareas(tareas);
        renderizarTareas();
    };

    
    const eliminarTarea = (index) => {
        
        const confirmacion = confirm("¿Estás seguro de que deseas eliminar esta tarea?");
        
        if (confirmacion) {
            const tareas = obtenerTareas();
            tareas.splice(index, 1);
            guardarTareas(tareas);
            renderizarTareas();
        }
    };

    
    const renderizarTareas = () => {
        const tareas = obtenerTareas();
        const contenedor = document.getElementById("lista-tareas");
        contenedor.innerHTML = ""; 

        if (tareas.length === 0) {
            contenedor.innerHTML = "<p>No hay tareas pendientes.</p>";
            return;
        }

        
        tareas.forEach((item, index) => {
            contenedor.innerHTML += `
                <div class="tarea-item">
                    <span>${item.tarea}</span>
                    <button class="btn-eliminar" onclick="manejarTareas.eliminarTarea(${index})">Eliminar</button>
                </div>
            `;
        });
    };

    
    return {
        agregarTarea,
        eliminarTarea,
        renderizarTareas
    };
})();


const agregarDesdeUI = () => {
    const input = document.getElementById("nuevaTarea");
    manejarTareas.agregarTarea(input.value);
    input.value = ""; 
};


document.addEventListener("DOMContentLoaded", () => {
    manejarTareas.renderizarTareas();
});