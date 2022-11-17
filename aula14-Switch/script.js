//Determinar a posição de um corredor;

var pos = 2;
switch(pos){
    case 1:
        document.write("Campeão");
        break;
    case 2:
        document.write("Segundo lugar");
        break;
    case 3:
        document.write("Terceiro lugar");
        break;
    default:
        document.write("Não subiu no pódio");
    }
document.write("<hr />");

//Usando varios cases para executar um mesmo bloco

var lugar = 3;

switch(lugar){
    case 1:
    case 2:
    case 3:
        document.write("Subiu no pódio");
        break;
    default: 
        document.write("Não subiu no pódio");
}

document.write("<hr />");

//Misturando If e Switch

switch(lugar){
    case 1:
    case 2:
    case 3:

    if(lugar == 1){
        document.write("Campeão");
    }else if(lugar == 2){
        document.write("Segundo lugar");
    }else{
        document.write("Terceiro Lugar");
    }
    break;
    default:
        document.write("Não subiu no pódio");
}