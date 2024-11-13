//laço while = enquanto
var x = 0;
document.write("<br><h3>testando loop com WHILE</h3>");
while (x < 10) {
  document.write("<br> O valor de x é:" + x);
  x = x + 1;
}

//laço for = para

document.write("<br><h3>Testando loop com FOR</h3>1");
for (a = 0; a < controle; a++) {
  document.write('<br> O valor de a é:" + ' + a);
}

//laço switch = escolha
//criar a função pedir()
function pedir() {
  switch (Number(valor)) {
    case 1:
      alert("Você escolheu suco");
      break;

    case 2:
      alert("Você escolheu água gelada");
      break;

    case 3:
      alert("Você escolheu sorvete");
      break;

    case 4:
      alert("Você está chamando o garçom");
      break;

    default:
      alert("Digite entre 1 e 4");
      break;
  }
}
