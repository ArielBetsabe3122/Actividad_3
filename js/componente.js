function agregarAlCarrito(){
    PinguToast.show({
        message: 'Agregado al carrito con exito',
        type:'success',
        duration: 3000
    });
}

function error(){
    PinguToast.show({
        message: 'Agregado al carrito con exito',
        type:'success',
        duration: 3000
    });
}


// Exportamos una instancia global lista para usar
const Toast = new PingüiToast();