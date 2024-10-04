

 const menu = `<div id="editor" class="editor">
<button><i class="fa-solid fa-text-height"></i></i></button>
<button onclick="execCmd('bold')"><i class="fa-solid fa-bold"></i></button>
<button><i class="fa-solid fa-underline"></i></i></button>
<button><i class="fa-solid fa-italic"></i></button>
<button><i class="fa-solid fa-align-left"></i></button>
<button><i class="fa-solid fa-align-justify"></i></button>
<button><i class="fa-solid fa-align-center"></i></button>
<button><i class="fa-solid fa-align-right"></i></button>
<button><i class="fa-solid fa-list"></i></button>
<button><i class="fa-solid fa-list-ol"></i></button>
<button><i class="fa-solid fa-list-check"></i></button>
<button><i class="fa-solid fa-image"></i></button>
<button><i class="fa-solid fa-highlighter"></i></button>
</div>   `;



const textarea = document.getElementById('bodyy');
const popupMenu = document.getElementById('editor');

textarea.addEventListener('contextmenu', function(event) {
    event.preventDefault();  // Previene el menú contextual por defecto del navegador
    popupMenu.style.display = 'block';
    popupMenu.style.left = `${event.pageX}px`;
    popupMenu.style.top = `${event.pageY}px`;
});

document.addEventListener('click', function(event) {
    if (!popupMenu.contains(event.target) && event.target !== textarea) {
        popupMenu.style.display = 'none';
    }
});
