const slides = document.querySelectorAll('.slide');
let aux = 0;

function mostrarSlides(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('ativo');
    } else {
      slide.classList.remove('ativo');
    }
  });
}

function proximo() {
  aux++;
  if (aux >= slides.length) {
    aux = 0;
  }
  mostrarSlides(aux);
}

function iniciarSlide() {
  mostrarSlides(aux);
  setInterval(proximo, 2500); 
}

iniciarSlide();