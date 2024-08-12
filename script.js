const toggleButton = document.getElementById('theme-toggle');
let currentTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
let image = document.getElementById('theme-image');
const devDark = "imagens/devDark.svg";
const devLight = "imagens/devLight.svg";
const devObject = document.getElementById("devIlustration");

if (currentTheme == 'light') {
    image.src = "/imagens/light.png";
    devObject.setAttribute("src", devLight);
} else {
    image.src = "/imagens/dark.png";
    devObject.setAttribute("src", devDark);
}

document.documentElement.setAttribute('data-theme', currentTheme);

toggleButton.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    if (currentTheme == 'light') {
        image.src = "/imagens/light.png";
        devObject.setAttribute("src", devLight);
    } else {
        image.src = "/imagens/dark.png";
        devObject.setAttribute("src", devDark);
    }
});