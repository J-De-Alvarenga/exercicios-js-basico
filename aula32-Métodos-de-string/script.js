var frase = "Amor Da Minha Vida";

document.write("<b>" + frase + "</b><br />");

document.write(frase.length + "<br />"); //tamanho da string.

document.write(frase.toUpperCase() + "<br />"); //Todas as letras em maiúsculo.

document.write(frase.toLocaleLowerCase() + "<br />"); //Todas as letras em minúsculo.

document.write(frase.charAt(5) + "<br />");//Retorna a letra que está na posição específicada.

document.write(frase.indexOf("D") + "<br />"); //Retorna o número de índice da primeira ocorrência de caractere ou conjunto de caracteres.

document.write(frase.substring(8,14) + "<br />"); //Retorna retorna os caracteres entre dois números de indice. O primeiro carctere é incluso, o último não.

document.write(frase.split(" ") + "<br />");//Divide a string e armazena suas partes em um array.

document.write(frase.trim() + "<br />");//Remove todos os espaços em branco.

document.write(frase.replace("Amor","Felicidade") + "<br />");//Substitui as letras por novas letras.

