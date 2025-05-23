/**
 * 11 - Suponha que temos a seguinte página HTML. Crie um script em JS (no arquivo script.js) que tenha uma função “mudaTexto()”, ela deve ser responsável por mudar o texto do elemento <h1> para “Novo Título” quando o botão for clicado. Dica: para selecionar o elemento você pode utilizar document.getElementById(“id-do-elemento”). Com esse elemento selecionado, você pode mudar o texto: variavelQueSelecionouOElemento.innerText = “Novo Título”.
 */

const resp = document.getElementById("titulo");
const btn = document.querySelector("form");

function mudaTexto() {
    resp.innerText = "Novo Título";
}

btn.addEventListener("submit", (e) => {
    mudaTexto();
    e.preventDefault();
});
