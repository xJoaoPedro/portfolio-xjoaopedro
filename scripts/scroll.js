window.onscroll = function() {scrollFunction()};
const btn = document.getElementById("back-to-top");

function scrollFunction() {
    // talvez precise do document.body.scrollTop > 850 ||  mais pra frente
    if (document.documentElement.scrollTop > 850) {
      btn.classList.add("show"); 
    } else {                        // adiciona ou remove a classe que mostra o botao na tela
      btn.classList.remove("show"); 
    }
  }

// Quando o usuário clicar no botão, rolar suavemente para o topo da página
function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}