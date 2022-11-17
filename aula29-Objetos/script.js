//Obejtos Notação Literal

var hotel = {
    nome: "Premium",
    quartos: 40,
    reservados: 15,
    academia: true,
    tiposQuartos: ['básico','duplo','suite'],

    quartosDispo: function(){
        return this.quartos - this.reservados; //this faz referência ao objeto que contém o método
    }

}

//Objetos podem ter vários tipos de dados: Mas variávies dentro deles são propriedades e funções são métodos.


//Imprimindo propriedades e métodos

document.write("Quartos: " + hotel.quartos + "<br />");
document.write("Reservados: " + hotel.reservados + "<br />");
document.write("Quartos Disponíveis: " + hotel.quartosDispo() + "<br />");
document.write("<hr />");


