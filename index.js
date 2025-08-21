//Setup and start animation maquina de escribir
document.addEventListener('DOMContentLoaded', () => {
    var typed = new Typed('#element', {
        strings: ['<i>Más de treinta años<br> trabajando por una vida<br> más sustentable</i>', '<i>y hoy<br> tenemos la misma ilusión <br>que el primer día.</i>'],
        typeSpeed: 30,
        loop: true,
        backDelay: 900,
        backSpeed: 20,

    });
});

document.addEventListener('DOMContentLoaded', () => {
  var typed = new Typed('#element2', {
      strings: ['<i>En Vida Fértil creemos en el poder de la sustentabilidad<br> y la responsabilidad ambiental</i>', '<i>Nuestros abonos estan diseñados<br> para ser amigables con el medio ambiente<br> y ayudar a preservar los recursos naturales a largo plazo.</i>'],
      typeSpeed: 28,
      loop: true,
      backDelay: 900,
      backSpeed: 10,

  });
});

document.addEventListener('DOMContentLoaded', () => {
  var typed = new Typed('#element3', {
      strings: ['<i>100 % O R G Á N I C O </i>', '<i>LIBRE DE QUÍMICOS</i>'],
      typeSpeed: 28,
      loop: true,
      backDelay: 900,
      backSpeed: 10,

  });
});


function ajustarAltoParrafo() {
    const parrafo = document.getElementById('parrafo-inicio2'); // Reemplaza 'miParrafo' por el ID de tu párrafo
    const anchoPantalla = window.innerWidth;
  
    // Ajusta los valores de ancho y alto según tus necesidades
    if (anchoPantalla <= 768) { // Ajusta el ancho máximo para pantallas pequeñas
      parrafo.style.height = '600px'; // Establece el alto deseado para pantallas pequeñas
    } else {
      parrafo.style.height = '400px'; // Permite que el alto se ajuste automáticamente en pantallas grandes
    }
  }    
  
  ajustarAltoParrafo();

  function abrirWhatsApp() {
    const numeroTelefono = "+59892207574"; // Reemplaza con tu número
    const cantidad = document.getElementById('cantidad').value
    const mensaje = "Hola, quiero comprar " + " " + cantidad + " " + "Bolsa de 50L ¿Tienen disponible?";
    const imagenUrl = "https://verdeverdad.github.io/VidaFertil/img/vida.700x700.png";
  
    const url = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}${encodeURIComponent(imagenUrl)}`;
    window.open(url, '_blank');
  }

  // (Este código se ejecutaría al cargar la página)
$(document).ready(function(){
  // Inicializar Bootstrap si no lo has hecho
  $(document).on('click', '[data-toggle="lightbox"]', function(event) {
      event.preventDefault();
      $(this).ekkoLightbox();
  });
});

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})

