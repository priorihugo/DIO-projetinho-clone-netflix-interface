

//adcionando elementes dinamicamente
//esse código ta meio gambiarra
let meuCarrossel = document.getElementById('js-meuCarrossel');
let numSlides=0;
function startCarrossel() {
  for (keys in imagensCarrosel) {
    numSlides++;  
    //quebra o objeto e pega uma img aleatoria
    let imgs = Object.values(imagensCarrosel[keys]);
    let img = imgs[randomIndex(imgs)];
    //cria uma div filha do carrossel 
    let novaDiv = document.createElement("div");
    let novaImg = `<img src="${img}" class="box-filme">`
    novaDiv.classList.add("item");
    novaDiv.innerHTML = novaImg;
    meuCarrossel.appendChild(novaDiv);

    function randomIndex(ar) {
      return Math.floor(Math.random() * ar.length);
    }
  }
}
startCarrossel();

$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})