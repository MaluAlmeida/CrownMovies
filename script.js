
//objeto de imagems dentro de um array
let imagens = ['img/beladest.jpeg','img/barbiedest.jpeg','img/mulandest.jpeg'];
//declarando a posição de inicio'   
let Index = 0;
//declarando o tempo que as imagens vão passar em milisegundos
let time = 3000;

//criando a função chamada slideshow
function slideShow() {
  //pegando o id da imagem no html para poder carregar as imagens
  document.getElementById('slides').src = imagens[Index];
  //incremento das imagens ex. se inicia na posição 0 , depois 1 , 2 e assim por diante
  Index++;
  //se a posição da imagem for imagem a quantidade de imagens no objeto
  if (Index == imagens.length) {
    Index = 0;
  }
  // setTimeout é uma função em javascript que executa o tempo nesse caso chama função e inicia o tempo
  setTimeout('slideShow()', time);
}
//executa toda a função slideShow
slideShow();



