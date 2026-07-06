
const manejarTareas = (function() {
    
    
    const obtenerTareas = () => {
        
        const tareasJSON = localStorage.getItem('misTareas');
        return tareasJSON ? JSON.parse(tareasJSON) : [];
    };

    
    const guardarTareas = (tareas) => {
       
        localStorage.setItem('misTareas', JSON.stringify(tareas));
    };

    
    const agregar = (tareaTexto) => {
        if (tareaTexto.trim() === '') {
            Swal.fire({
                icon: 'warning',
                title: 'Campo vacío',
                text: 'Por favor escribe una tarea antes de agregarla.',
                confirmButtonColor: '#007bff'
            });
            return;
        }

        const tareas = obtenerTareas();
        tareas.push({ tarea: tareaTexto, completada: false }); 
        guardarTareas(tareas);
        renderizar();
    };

   
    const eliminar = (index) => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Esta tarea se eliminará permanentemente.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#dc3545', 
            cancelButtonColor: '#6c757d',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                const tareas = obtenerTareas();
                tareas.splice(index, 1); 
                guardarTareas(tareas);
                renderizar();
                
                Swal.fire(
                    '¡Eliminada!',
                    'La tarea ha sido borrada.',
                    'success'
                );
            }
        });
    };

    
    const renderizar = () => {
        const tareas = obtenerTareas();
        const contenedor = document.getElementById('lista-tareas');
        contenedor.innerHTML = ''; 

        if (tareas.length === 0) {
            contenedor.innerHTML = '<p style="text-align:center; color:#777;">No hay tareas pendientes.</p>';
            return;
        }

        tareas.forEach((item, index) => {
            contenedor.innerHTML += `
                <div class="tarea-item">
                    <span>${item.tarea}</span>
                    <button class="btn-eliminar" onclick="manejarTareas.eliminar(${index})">Eliminar</button>
                </div>
            `;
        });
    };

    
    return {
        agregar,
        eliminar,
        renderizar
    };
})();


const agregarDesdeUI = () => {
    const input = document.getElementById('nuevaTarea');
    manejarTareas.agregar(input.value);
    input.value = ''; 
};


document.addEventListener('DOMContentLoaded', () => {
    manejarTareas.renderizar();
});