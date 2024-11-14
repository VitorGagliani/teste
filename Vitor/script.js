const container = document.getElementById('container');
const loader = document.getElementById('loader');
let currentPage = 1;

// Função para carregar conteúdo
function loadContent() {
  loader.style.display = 'block'; // Exibe o loader

  // Simula uma requisição
  setTimeout(() => {
    const newContent = `
      <p class"loader">Conteúdo da página ${currentPage}...</p>
       <div class="id">
        <img src="1.jpg" alt="">
        <img src="2.jpg" alt="">
        <img src="3.jpg" alt="">
        <img src="4.jpg" alt="">
        <img src="5.jpg" alt="">
        <img src="6.jpg" alt="">
        
   </div>
      `
    ;
    container.innerHTML += newContent;
    currentPage++;
    loader.style.display = 'none'; // Esconde o loader
  }, 1000); // Simula um atraso de 1 segundo
}

// Carrega o conteúdo inicial
loadContent();

// Detecta a rolagem
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    loadContent();
  }
});