var preco = 5; //Preço de cada letra
var quantidade = 14; //Quantidade de letras

var total = preco * quantidade; // Total armazena a multiplicação de preco e quantidade 

var custo = document.getElementById("custo"); // Essa linha pega o elemento que tem o attr id com valor custo

custo.textContent = "O nome personalisado custa: R$" + total + " reais"; //Essa linha atualiza o contéudo de custo com o resultado de total.