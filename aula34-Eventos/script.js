//Evento de click

var dv = document.getElementById("dv");
var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");

function colorir(){
    dv.style.backgroundColor = "#f00"; //Muda a cor da div para vermelho
}

function descolorir(){
    dv.style.backgroundColor = "white"; //Muda a cor da div para branco
}

b1.addEventListener("click",colorir); //addEventListener recebe o nome do evento que queremos e a função que executará alguma coisa.
b2.addEventListener("click",descolorir);