var msg = "<h2>Browser window</h2><p>Largura: " + window.innerWidth + "</p>";

msg += "<p>Altura: " + window.innerHeight + "</p>";

msg += "<h2>History</h2><p>Items: " + window.history.length + "</p>";

msg +="<h2>Screen</h2><p>Largura da Tela: " + window.screen.width + "</p>";

msg +="<p>Altura da Tela: " + window.screen.height + "</p>";

var el = document.getElementById("info");
el.innerHTML = msg;

window.alert("Página atual: " + window.location);