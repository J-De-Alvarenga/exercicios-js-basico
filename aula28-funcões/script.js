//Função Básica

function nome(){
    document.write("Jhonattan  <br />");
}

nome(); // Quando chamamos a função, ela é executada.

nome(); //Podemos chamar quantas vezes quisermos
nome();
nome();

document.write("<hr />");

//Funções com parâmetros e argumentos

function area(largura,altura){//Parâmetros
    return largura * altura; //Os parâmentros funcionam como variáveis dentro da função
}

document.write(area(3,5));//Argumentos são os valores que passamos para os parâmetros

//Return retorna aquilo que queremos que a função faça. Apos return nada é executado na função
document.write("<hr />")
//Obtendo múltiplos valores através de uma função

function tamanho(largura,altura,profundidade){
    var area = largura*altura;
    var volume = largura*altura*profundidade;
    var tamanhos = [area,volume]; //Um array armazena as duas variáveis
    return tamanhos;
}

var area1 = tamanho(2,2)[0];
document.write(area1 + "<br />");
var volume1 = tamanho(2,2,2)[1];
document.write(volume1);