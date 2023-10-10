//Ativar Links do Menu

const links = document.querySelectorAll(".header-menu a");

function ativarLink(link){
  const url = location.href;
  const href = link.href;
  if(url.includes(href)){
    link.classList.add("ativo");
  }
}
links.forEach(ativarLink);

//Ativar itens do orçamento

const parametros = new URLSearchParams(location.search); //pegou o seguro e o prata/ouro

function ativarProduto(parametro){
  const elemento = document.getElementById(parametro);
  if(elemento){
    elemento.checked = true;
  }
}
parametros.forEach(ativarProduto);

//Perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event){
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa"); //tira e remove a classe
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta){
  pergunta.addEventListener('click', ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

//Galeria de bicicletas

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event){
  const img = event.currentTarget; //pega a imagem que ta sendo clicada
  const media = matchMedia("(min-width:1000px)").matches; //se tiver no mínimo 1000px vai dar true
  if(media){ //se for verdadeiro
    galeriaContainer.prepend(img); //prepend remove o elemento e adicionar onde queremos, nesse caso adicionamos a imagem clicada no container
  }
}

function eventosGaleria(img){
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

//Animações

if(window.SimpleAnime){
  new SimpleAnime();
}