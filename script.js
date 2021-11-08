let meuCarrossel = document.getElementById("carrossel-itens");

function startCarrossel() {
  for (keys in imagensCarrosel) {
    let val = imagensCarrosel[keys];
    let imgs = Object.values(imagensCarrosel[keys]);
    let img = imgs[randomIndex(imgs)];

    let novaDiv = document.createElement("div");
    novaDiv.classList.add("carrossel-item");
    novaDiv.style.backgroundImage = `url(${img})`;
    meuCarrossel.appendChild(novaDiv);

    function randomIndex(ar) {
      return Math.floor(Math.random() * ar.length);
    }
  }
}
startCarrossel();
////variaveis de controle
let slideInicial = 1;
let slideFinal = 4;
let tamanhoDoMovimento =
  document.getElementsByClassName("carrossel-item")[0].clientWidth + 28;
let posiçãoRelativa = 0;

function esquerda() {
  if (slideInicial > 1) {
    posiçãoRelativa = posiçãoRelativa + tamanhoDoMovimento;
    meuCarrossel.style.transform = `translateX(${posiçãoRelativa}px)`;
    console.log(posiçãoRelativa);
    slideInicial--;
    slideFinal--;
    console.log("slide inicial: " + slideInicial);
    console.log("slide final: " + slideFinal);
  }
}
function direita() {
  if (slideFinal < 8) {
    posiçãoRelativa = posiçãoRelativa - tamanhoDoMovimento;
    meuCarrossel.style.transform = `translateX(${posiçãoRelativa}px)`;
    slideFinal++;
    slideInicial++;
    console.log("slide inicial: " + slideInicial);
    console.log("slide final: " + slideFinal);
  }

}
