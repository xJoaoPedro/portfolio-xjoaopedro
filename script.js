const toggleButton = document.getElementById('theme-toggle');
let currentTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
let image = document.getElementById('theme-image');
const devDark = "imagens/devDark.svg";
const devLight = "imagens/devLight.svg";
const devObject = document.getElementById("devIlustration");

if (currentTheme == 'light') {
    image.src = "imagens/light.png";
    devObject.setAttribute("src", devLight);
} else {
    image.src = "imagens/dark.png";
    devObject.setAttribute("src", devDark);
}

document.documentElement.setAttribute('data-theme', currentTheme);

toggleButton.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    if (currentTheme == 'light') {
        image.src = "imagens/light.png";
        devObject.setAttribute("src", devLight);
    } else {
        image.src = "imagens/dark.png";
        devObject.setAttribute("src", devDark);
    }
});

window.onscroll = function() {scrollFunction()};
const btn = document.getElementById("back-to-top");

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      btn.classList.add("show"); // Adiciona a classe para mostrar o botão
    } else {
      btn.classList.remove("show"); // Remove a classe para esconder o botão
    }
  }
// Quando o usuário clicar no botão, rolar suavemente para o topo da página
function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}
