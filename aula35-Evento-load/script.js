//Evento load

function setup(){
    var textInput;
    textInput = document.getElementById("user");
    textInput.focus();
}

window.addEventListener("load",setup);//Ao carregar a página a primeira entrada de texto ganha o foco.