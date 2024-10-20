document.addEventListener("DOMContentLoaded", function() {
    const barraSuperior = document.getElementById("barraSuperior");
    const contenidoPrincipal = document.getElementById("contenidoPrincipal");
    const encabezado = document.getElementById("encabezado");
    const titulo = document.getElementById("titulo");
    const portada = document.getElementById("portada");
    const icono =document.getElementById('iconotitulo') ;
   
    //titulo.innerHTML = icono.innerHTML+encabezado.innerHTML;
 
    function ajustarPadding() {
        const alturaBarra = barraSuperior.offsetHeight;
        contenidoPrincipal.style.paddingTop = alturaBarra + "px";
    }

    ajustarPadding(); // Ajusta el padding cuando la página se carga

    // Si la barra puede cambiar de tamaño después de la carga (por ejemplo, en respuesta a eventos de la página), puedes ajustar nuevamente
    window.addEventListener("resize", ajustarPadding);
    const menuIcon = document.getElementById("Menu");
    const menuLateral = document.getElementById("menu-lateral");

    // Función para mostrar el menú lateral
    function mostrarMenu() {
        menuLateral.style.left = "0"; // Desliza el menú hacia la vista
    }

    // Función para ocultar el menú lateral
    function ocultarMenu() {
        menuLateral.style.left = "-250px"; // Desliza el menú hacia fuera de la vista
    }

    // Mostrar el menú cuando el cursor está sobre el ícono o el menú
    menuIcon.addEventListener("mouseenter", mostrarMenu);
    menuLateral.addEventListener("mouseenter", mostrarMenu);

    // Ocultar el menú cuando el cursor deja el ícono o el menú
    menuIcon.addEventListener("mouseleave", function() {
        // Retrasar un poco para dar tiempo al usuario de mover el cursor al menú
        setTimeout(function() {
            if (!menuLateral.matches(':hover') && !menuIcon.matches(':hover')) {
                ocultarMenu();
            }
        }, 200);
    });
   
    menuLateral.addEventListener("mouseleave", function() {
        // Retrasar un poco para dar tiempo al usuario de mover el cursor al ícono
        setTimeout(function() {
            if (!menuLateral.matches(':hover') && !menuIcon.matches(':hover')) {
                ocultarMenu();
            }
        }, 200);
    });
});


const popupMenu = document.getElementById('editor');
const textarea = document.getElementById('editortext');


document.addEventListener('click', function(event) {
    const iframeDocument = iframe.contentDocument;
    const contentDiv = iframeDocument.getElementById('bodyy');
   
    if (!popupMenu.contains(event.target) && event.target !== textarea) {
        popupMenu.style.display = 'none';
    }
    if (contentDiv.textContent.trim() === '') {
        contentDiv.innerHTML = '<span id="escribe" style="color: gray;">Escribe aquí...</span>';
    }
    
});


textarea.srcdoc = `
    <html>
    <head>
        <link rel="stylesheet" href="css/Global.css" />
    </head>
    <body id="bodyy"  contenteditable="true" >
           <span id="escribe" style="color: gray;">Escribe aquí...</span>

    </body>
    </html>
`;







  

