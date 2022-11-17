//Tratameto de erros: try,catch e finally

try{
    alertt("Bom dia!"); //alert escrito errado de propósito
}catch(erro){//Esses comandos serão executados
    document.write("Houve um erro no bloco try " + erro.message + "<br />");
}finally{
    document.write("Comando try finalizado" + "<br />");
}