//&&

var energia = 100;
var velocidade;

if((energia > 80) && (energia <=100)){
    document.write("Energia alta");
    velocidade = 100;
}else if((energia > 60) && (energia < 81)){
    document.write("Energia boa");
    velocidade = 80;
}else if((energia > 40) && (energia < 61)){
    document.write("Energia média");
    velocidade = 60;
}else if((energia > 20) && (energia < 41)){
    document.write("Energia baixa");
    velocidade = 40;
}else if((energia > 1) && (energia < 21)){
    document.write("Energia crítica");
    velocidade = 20;
}else{
    document.write("Energia zerada");
    velocidade = 0;
}

document.write("<br /> Velocidade: " + velocidade);

document.write("<hr />");

//||

var pontos = 70;

if((pontos < 34) || (pontos > 65)){
    document.write("Jogador venceu");
}else{
    document.write("Jogador perdeu");
}
