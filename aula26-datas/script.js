//datas

var data = new Date();

var dia = data.getDate(); // dia

var mes = data.getMonth() + 1; // mês -  o +1 é pq os meses contidos nesse método sao armazenados no formato de array e o primeiro mês começa em [0].

var ano = data.getFullYear(); // ano

var p = document.getElementsByTagName('p')[1].textContent = "Nossa data é: " + dia + " / " + mes  + " / " + ano;