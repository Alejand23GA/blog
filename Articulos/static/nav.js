

document.addEventListener("DOMContentLoaded", function() {
    mostrarComidaBebida(); // Mostrar comida, bebidas y postres por defecto en la página de inicio

    // Event listeners para los enlaces de navegación
    document.getElementById('link-blog').addEventListener('click', function() {
        gestionarVisibilidadComidaBebida();
        mostrarContenido('blog-section'); // Mostrar contenido específico del blog
    });

    document.getElementById('link-acerca').addEventListener('click', function() {
        gestionarVisibilidadComidaBebida();
        mostrarContenido('acerca-section'); // Mostrar contenido específico de acerca
    });

    document.getElementById('link-centeotl').addEventListener('click', function() {
        gestionarVisibilidadComidaBebida();
        mostrarContenido('centeo-section'); // Mostrar contenido específico de centeotl
    });

    // Event listener para cerrar el menú móvil al hacer clic en el enlace de contactos
    document.querySelector('.menu a').addEventListener('click', function(event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
        cerrarNav(); // Cerrar el menú móvil
    });

    // Event listener para el botón "Ver más productos"
    document.getElementById('ver-productos').addEventListener('click', function() {
        mostrarProductos();
    });

    // Event listener para el botón "Salir" en productos
    document.getElementById('cerrar-productos').addEventListener('click', function() {
        ocultarProductos();
    });
        // Event listener para el botón "Salir" en productos
        document.getElementById('cerrar-productos').addEventListener('click', function() {
            ocultarProductos();
        });
    
        // Mostrar la descripción al inicio
        mostrarDescripcion();
    });

// Función para ocultar la sección de descripción
function ocultarDescripcion() {
    var descripcion = document.querySelector('.descripcion');
    if (descripcion) {
        descripcion.style.display = 'none';
    }
}

// Función para mostrar comida, bebidas y postres en la página de inicio (blog)
function mostrarComidaBebida() {
    var sections = ['comida', 'bebidas', 'postres'];
    sections.forEach(function(section) {
        mostrarElemento(section);
    });

    ocultarElemento('centeo-section');
    ocultarElemento('acerca-section');
}

// Función para gestionar la visibilidad de comida, bebidas y postres según la navegación
function gestionarVisibilidadComidaBebida() {
    var path = window.location.pathname;

    if (path !== '/blog') {
        ocultarRecuadrosComidaBebidaPostre();
    } else {
        mostrarComidaBebida();
    }
}

// Función para ocultar los recuadros de comida, bebidas y postres
function ocultarRecuadrosComidaBebidaPostre() {
    var sections = ['comida', 'bebidas', 'postres'];
    sections.forEach(function(section) {
        ocultarElemento(section);
    });
}

// Función para gestionar la visibilidad de los recuadros de comida, bebidas y postres según la navegación
function gestionarVisibilidadComidaBebida() {
    var path = window.location.pathname;
    
    // Ocultar los recuadros de comida, bebidas y postres en todas las secciones excepto en la página de inicio (blog)
    if (path !== '/blog') {
        ocultarElemento('comida');
        ocultarElemento('bebidas');
        ocultarElemento('postres');
    } else {
        mostrarComidaBebida(); // Mostrar en la página de inicio (blog)
    }
}


// Función para mostrar contenido específico y ocultar los demás
function mostrarContenido(sectionId) {
    // Ocultar recuadros de comida, bebidas y postres
    ocultarRecuadrosComidaBebidaPostre();

    var sections = ['comida', 'bebidas', 'postres', 'centeo-section', 'blog-section', 'acerca-section'];
    sections.forEach(function(section) {
        if (section === sectionId) {
            mostrarElemento(section);
        } else {
            ocultarElemento(section);
        }
    });
}


// Estado de los productos
var productosVisibles = {
    comida: false,
    bebidas: false,
    postres: false
};

// Función para mostrar productos específicos y ocultar los demás
function mostrarProductos(productoId) {
    // Referencia al contenedor de productos específico
    var productoEspecifico = document.getElementById('productos-' + productoId);
    
    // Si el contenedor de productos está visible, lo ocultamos y mostramos las cajas de categorías
    if (productoEspecifico.style.display === 'block') {
        productoEspecifico.style.display = 'none';
        // Mostrar todas las cajas de categorías nuevamente
        var cajas = document.querySelectorAll('.box');
        cajas.forEach(function(caja) {
            caja.style.display = 'block';
        });
    } else {
        // Ocultar todos los productos contenedores
        var productos = document.querySelectorAll('.productos-contenedor');
        productos.forEach(function(producto) {
            producto.style.display = 'none';
        });

        // Mostrar el producto específico
        productoEspecifico.style.display = 'block';

        // Ocultar todas las cajas excepto la seleccionada
        var cajas = document.querySelectorAll('.box');
        cajas.forEach(function(caja) {
            if (caja.id !== productoId) {
                caja.style.display = 'none';
            }
        });
    }
}


// Función para mostrar un elemento
function mostrarElemento(id) {
    var elemento = document.getElementById(id);
    if (elemento) {
        elemento.classList.remove('hidden');
        elemento.classList.add('visible');
    }
}

// Función para ocultar un elemento
function ocultarElemento(id) {
    var elemento = document.getElementById(id);
    if (elemento) {
        elemento.classList.add('hidden');
        elemento.classList.remove('visible');
    }
}

// Función para mostrar todos los contenidos principales (todos los productos)
function mostrarContenidoPrincipal() {
    var sections = ['comida', 'bebidas', 'postres', 'centeo-section', 'blog-section', 'acerca-section'];
    sections.forEach(function(section) {
        mostrarElemento(section);
    });
}

// Función para abrir el menú móvil
function openNav() {
    document.getElementById("mobile-menu").style.width = "30%";
}

// Función para cerrar el menú móvil
function cerrarNav() {
    document.getElementById("mobile-menu").style.width = "0";
}

// Función para mostrar recetas específicas dentro del apartado de blog
function mostrarReceta(recetaId) {
    // Ocultar todas las recetas dentro del apartado de blog
    var recetas = document.querySelectorAll('#blog-section .receta-contenedor');
    recetas.forEach(function(receta) {
        receta.style.display = 'none';
    });

    // Mostrar la receta específica
    var recetaEspecifica = document.getElementById('receta-' + recetaId);
    if (recetaEspecifica) {
        recetaEspecifica.style.display = 'block';
    }
}

// Función para cerrar todas las recetas
function cerrarReceta() {
    // Ocultar todas las recetas dentro del apartado de blog
    var recetas = document.querySelectorAll('#blog-section .receta-contenedor');
    recetas.forEach(function(receta) {
        receta.style.display = 'none';
    });
}

// Ejemplo de uso en el contexto dado
document.addEventListener('DOMContentLoaded', function() {
    // Asignación de eventos a los botones "Ver receta" dentro del apartado de blog
    var botonesReceta = document.querySelectorAll('#blog-section .box button');
    botonesReceta.forEach(function(boton) {
        boton.addEventListener('click', function() {
            var recetaId = this.parentNode.parentNode.id;
            mostrarReceta(recetaId);
        });
    });

    // Event listener para el botón "Cerrar" en las recetas
    var botonesCerrar = document.querySelectorAll('#blog-section .receta-contenedor button');
    botonesCerrar.forEach(function(boton) {
        boton.addEventListener('click', function() {
            cerrarReceta();
        });
    });
});

