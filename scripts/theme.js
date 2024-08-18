const toggleButton = document.getElementById('theme-toggle'); 
let currentTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"); // armazena localmente a preferencia ou combina com a cor do navegador
let image = document.getElementById('theme-image');
const devDark = "imagens/outras/devDark.svg";
const devLight = "imagens/outras/devLight.svg";
const devObject = document.getElementById("devIlustration");

document.documentElement.setAttribute('data-theme', currentTheme); // mantém a preferência de cor escolhida

function verifyTheme() {
    if (currentTheme == 'light') {
        image.src = "imagens/outras/light.png";
        devObject.setAttribute("src", devLight);
    } else {
        image.src = "imagens/outras/dark.png";
        devObject.setAttribute("src", devDark);
    }
}

toggleButton.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light'; // compara o tema, se for igual a light, troca pra dark, se não, troca pra light
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme); // armazena a cor nova
    verifyTheme();
});

verifyTheme();