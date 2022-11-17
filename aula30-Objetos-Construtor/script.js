//Objetos Notação Construtor

var casa = new Object();

casa.cor = "rosa";
casa.quartos = 4;
casa.garagem = true;
casa.pessoas = 2;
casa.banheiros = 2;
casa.sala = 1;
casa.cozinha = 1;

casa.comodos = function(){
    return this.quartos + this.sala + this.banheiros + this.cozinha;
}



document.write("A casa tem " + casa.comodos() + " comodos<br />");
document.write("<hr />");

//Criando vários objetos com construtor

function Hotel(nome, quartos, reservas){
    this.nome = nome;
    this.quartos = quartos;
    this.reservas = reservas;
    this.disponibilidade = function(){
        return this.quartos - this.reservas;
    }
}

var quayHotel = new Hotel('Quay',40,25);
var parkHotel = new Hotel('Park',120,77);

document.write("Hotel: " + quayHotel.nome + "<br />" + "Disponibilidade: " + quayHotel.disponibilidade() + " quartos<br />");
document.write("Hotel: " + parkHotel.nome + "<br />" + "Disponibilidade: " + parkHotel.disponibilidade() + " quartos<br />");

//Podemos criar quantos hotéis quisermos seguindo esse modelo
