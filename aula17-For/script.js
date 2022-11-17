//For

var i;

for(i = 0; i<10; i++ ){ //Enquanto i for menor que 10 vai executar os comados da chave
    document.write("Jhonattan" + "<br />");
}
document.write("<br />");

//For em Arrays

//Preencher um array com números 0

var num = new Array();
var i;

for(i=0;i<10;i++){
    num[i] = 0;
    document.write(num[i] + "<br />");
}

document.write(num);
document.write("<hr />");

//Exemplo Matriz: Precisaremos de dois For: um para cada array que a matriz tem

var mochila = [[" corda ", 1],[" faca ", 2],[" remedio ", 10],[" pedra ", 32],[" pilha ", 6],[" lanterna ", 1]];

for(var l=0;l<6;l++){
    for(var c=0;c<2;c++){
        document.write(mochila[l][c] + "<br />");
    }
}

//Os items são impressos um em cada linha
//imprimindo na mesma linha
document.write("<hr />");

for(var i=0;i<6;i++){
    document.write(mochila[i][0] + "  :  " + mochila[i][1]);
}