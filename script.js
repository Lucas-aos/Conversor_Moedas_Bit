// função para converter moedas
function newInp() {
  var valorReal = document.getElementById("coin1").value;
  var valorCoin = document.getElementById("coin2").value;
  var valorDólar = 4.87;
  var valorEuro = 5.29;
  var valorPeso = 0.014;
  var valorBit = 172424.2;
  var d = "Dólar(es)";
  var e = "Euro(s)";
  var p = "Peso(s)";

  if (valorReal == "") {
    alert("Coloque uma quantidade");
  } else if (valorCoin == "Dólar") {
    var valorConvertido = valorReal / valorDólar;
    var Bit = valorConvertido / valorBit;
    document.getElementById("resultado").textContent =
      "Na cotação de 14/11/2023, R$" +
      valorReal +
      " corresponde a " +
      valorConvertido.toFixed(2) +
      " " +
      d +
      "!";
    document.getElementById("resultado2").textContent =
      "Isso equivale a " + Bit + " bitcoins!";
  } else if (valorCoin == "Euro") {
    var valorConvertido = valorReal / valorEuro;
    var Bit = valorConvertido / valorBit;
    document.getElementById("resultado").textContent =
      "Na cotação de 14/11/2023, R$" +
      valorReal +
      " corresponde a " +
      valorConvertido.toFixed(2) +
      " " +
      e +
      "!";
    document.getElementById("resultado2").textContent =
      "Isso equivale a " + Bit + " bitcoins!";
  } else if (valorCoin == "Peso Argentino") {
    var valorConvertido = valorReal / valorPeso;
    var Bit = valorConvertido / valorBit;
    document.getElementById("resultado").textContent =
      "Na cotação de 14/11/2023, R$" +
      valorReal +
      " corresponde a " +
      valorConvertido.toFixed(2) +
      " " +
      p +
      "!";
    document.getElementById("resultado2").textContent =
      "Isso equivale a " + Bit + " bitcoins!";
  }
}