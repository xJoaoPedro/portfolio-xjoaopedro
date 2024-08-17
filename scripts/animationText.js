let textElement = document.getElementById('title');
let textElement2 = document.getElementById('textAboutMe');
const baseText = "xJoaoPedro";
const baseText2 = "Hello World!";


function alternarTexto() {
    if (textElement.textContent.endsWith('_')) {
        textElement.textContent = baseText;
        textElement2.textContent = baseText2;
    } else {
        textElement.textContent += '_';
        textElement2.textContent = baseText2.slice(0, -1);
        textElement2.textContent += '_';
    }
}

setInterval(alternarTexto, 800);