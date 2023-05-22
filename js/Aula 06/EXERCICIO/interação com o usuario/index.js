var btnMudaCor = document.querySelector("#btn-muda-cor");
var minhaDiv = document.querySelector("#minha-div");

var telaDeFundo = document.querySelector("body");

btnMudaCor.addEventListener("click", () => {
  const inicio = telaDeFundo.style.backgroundColor;
  telaDeFundo.style.backgroundColor = "blue";
  btnMudaCor.style.backgroundColor = "white";
  
  if (inicio === "blue") {
    telaDeFundo.style.backgroundColor = "white";
    btnMudaCor.style.backgroundColor = 'buttonface';
  }

  setTimeout(() => {
    alert("Cor de fundo foi alterada!");
  }, 250);
});

