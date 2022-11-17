var usuario; //Criamos uma variável e não atribuímos um valor a ela, logo ela está como indefinida(undefined).
var msg; 

usuario = "Jhonattan"; //Agora sim atribuímos um valor a variável.

msg = "Seja bem vindo !"; //Sempre que armazenar texto em uma variável, usamos aspas para envolver o texto.

var nome = document.getElementById("nome");//Armazenamos na variável nome o elemento que tem attr id com valor nome

nome.textContent = usuario; //nome recebe o conteúdo de usuario

var mensagem = document.getElementById("mensagem"); //Armazenamos em mensagem o elemento com attr id mensagem

mensagem.textContent = msg; //Mensagem recebe o coteúdo de msg

