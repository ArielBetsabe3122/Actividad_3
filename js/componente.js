var PinguToast = {
    show: function(opciones) {
        var contenedor = document.getElementById('pingu-toast-container');
        if (!contenedor) {
            contenedor = document.createElement('div');
            contenedor.id = 'pingu-toast-container';
            document.body.appendChild(contenedor);
        }

        var toast = document.createElement('div');
        toast.className = 'pingu-toast ' + (opciones.type || 'info');
        
        var estructuraImagen = '';
        if (opciones.imagen) {
            estructuraImagen = '<img src="' + opciones.imagen + '" class="pingu-toast-img" alt="icono">';
        }

        toast.innerHTML = 
            estructuraImagen +
            '<span class="pingu-toast-mensaje">' + opciones.message + '</span>' +
            '<button class="pingu-toast-cerrar">×</button>';

        toast.querySelector('.pingu-toast-cerrar').addEventListener('click', function() {
            toast.remove();
        });

        contenedor.appendChild(toast);

        setTimeout(function() {
            toast.style.animation = 'desvanecer 0.5s forwards';
            setTimeout(function() {
                toast.remove();
            }, 500);
        }, opciones.duration || 3000);
    }
};

function agregarAlCarrito(){
    PinguToast.show({
        message: 'Agregado al carrito con exito',
        type:'success',
        imagen: 'img/pingu.png',
        duration: 3000
    });
}

function error(){
    PinguToast.show({
        message: 'Error en algun producto',
        type:'error',
        duration: 3000
    });
}

function info(){
    PinguToast.show({
        message: 'Producto casi agotado',
        type:'info',
        duration: 3000
    });
}
