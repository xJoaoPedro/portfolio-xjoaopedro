let textElement = document.getElementById('title');
const baseText = "xJoaoPedro";

function alternarTexto() {
    if (textElement.textContent.endsWith('_')) {
        textElement.textContent = baseText;
    } else {
        textElement.textContent += '_';
    }
}

setInterval(alternarTexto, 800);