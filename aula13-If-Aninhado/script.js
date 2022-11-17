//Exemplo 1:

var nota = 95;

if(nota < 40){
    document.write("Reprovado com louvor");
}else{
    if(nota < 60){//Esse if está dentro de outro if
        document.write("Reprovado por nota baixa");
    }else{
        if(nota < 80){
            document.write("Aprovado com nota normal");
        }else{
            document.write("Aprovado com louvor");
        }
    }
}
document.write("<hr />");
//Ex 2:

var nota1 = 85;

if(nota1 > 60){
    document.write("Aprovado ");
    if(nota1 < 90){
        document.write("com nota normal");
    }else{
        document.write("com louvor");
    }
}else{
    document.write("Reprovado ");
    if(nota1 > 40){
        document.write("por nota baixa");
    }else{
        document.write("com lovor");
    }
}