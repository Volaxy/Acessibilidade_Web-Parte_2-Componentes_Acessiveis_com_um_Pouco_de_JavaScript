// Variáveis
var btnAbreDialog = document.querySelector('#abreDialog');
var dialog = document.querySelector('.dialogNewsletter');
var dialogBody = document.querySelector('.dialogNewsletter-body');
var dialogOverlay = document.querySelector('.dialogNewsletter-overlay');

btnAbreDialog.style.display = "block";

// Quando abrir a dialog...
btnAbreDialog.addEventListener('click', function() {
  dialog.classList.add('dialogNewsletter--aberto');

  document.querySelector(".dialogNewsletter-campo").focus();
  document.querySelector("#conteudoForaDialog").inert = "true";

  document.querySelector("video").removeAttribute("controls");
});

function fechandoDialog() {
  document.activeElement.blur();
  document.querySelector("video").setAttribute("controls", true);
  dialog.classList.remove('dialogNewsletter--aberto');
}

// Listeners
document.querySelector('.dialogNewsletter-fechar').addEventListener('click', fechandoDialog);