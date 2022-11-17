//Sintaxe Array

var mochila = new Array();

mochila[0] = "corda"; //O array começa na posição 0
mochila[1] = "faca"; //Os colchetes indicam as posições do array
mochila[2] = "arame";
mochila[3] = "lanterna";
mochila[4] = "pedra";

document.write(mochila[0] + "<br />");
document.write(mochila[3] + "<br />");

document.write("<hr />");

//Métodos de array: Métodos são funcionalidades que podemos aplicar a arrays

//Concat: Junta os elementos de dois ou mais arrays e retorna uma cópia com os elementos juntos

var v1 = ["Carro","Moto"]; //outra forma de se criar um array
var v2 = ["Navio","Patins","Skate"];

var transp = v1.concat(v2);

document.write(transp);

document.write("<hr />");

//IndexOf: Procura por um elemento específico no array e retorna a sua posição

var cores = ["Verde","Azul","Vermelho"];

var pos = cores.indexOf("Azul");

document.write(pos);

document.write("<hr />");

//Join: Junta todos os elementos de um array em uma string

var cores = ["Verde","Azul","Vermelho"];

var paleta = cores.join();

document.write(paleta);

document.write("<hr />");

//Push: Insere um novo elemento no final do array

var cores = ["Verde","Azul","Vermelho"];

cores.push("Preto");

document.write(cores);

document.write("<hr />");

//Pop: Remove o último elemento do array

var cores = ["Verde","Azul","Vermelho"];

cores.pop();

document.write(cores);

document.write("<hr />");

//Reverse: Inverte a ordem dos elementos do array

var cores = ["Verde","Azul","Vermelho"];

cores.reverse();

document.write(cores);

document.write("<hr />");

//Shift: Remove o primeiro elemento do array

var cores = ["Verde","Azul","Vermelho"];

cores.shift();

document.write(cores);

document.write("<hr />");

//Sort: Ordena os elementos do array em ordem crescente

var num = [3,2,1];

num.sort();

document.write(num);

document.write("<hr />");

//toString: Converte um array em string e retorna essa string

var cores = ["Verde","Azul","Vermelho"];

cores.toString();

document.write(cores);

document.write("<hr />");

//unShift: Insere um novo elemento no início do array

var cores = ["Verde","Azul","Vermelho"];

cores.unshift("Branco");

document.write(cores);

document.write("<hr />");

//Splice: Corta o array em um ponto indicado

num = [0,1,2,3,4,5];

num.splice(2,4);

document.write(num);

document.write("<hr />");

