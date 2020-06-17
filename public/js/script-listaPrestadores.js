const inputPesquisa = document.getElementById('pesquisa-listaPrestadores');
const buttonPesquisa = document.getElementById('lupa-pesquisa');
const buttonLimpaPesquisa = document.getElementById('limpa-pesquisa');
const divResultadoPesquisa = document.querySelector('.lista-cardsPrestadores .row .resultadoPesquisa');
const resultadoPesquisa = document.getElementById('resultadoPesquisa'); 
const pesquisaAvaliacao = document.querySelectorAll('#filtroAvaliacao ul li input');
const pathPadrao = "/prestador/lista"


// evento para pesquisa pelo input de pesquisa
buttonPesquisa.addEventListener('click', function () {
  let textoPesquisa = inputPesquisa.value
  if (document.location.pathname !== pathPadrao) {
    document.location.pathname = pathPadrao + "/" + textoPesquisa;
  } else {
    document.location.pathname += "/" + textoPesquisa;
  }
});

// evento para pesquisa pelo input de pesquisa + action do button enter
inputPesquisa.addEventListener('keyup', function (event) {
  let textoPesquisa = inputPesquisa.value
  if (this.value.length > 0 && event.key == 'Enter') {
    if (document.location.pathname !== pathPadrao) {
      document.location.pathname = pathPadrao + "/" + textoPesquisa;
    } else {
      document.location.pathname += "/" + textoPesquisa;
    }
  }
});

// evento para limpar pesquisa e voltar a página inicial
buttonLimpaPesquisa.addEventListener('click', function () {
  if (document.location.pathname !== pathPadrao) {
    document.location.pathname = pathPadrao;
  } 
})

pesquisaAvaliacao.forEach(click => {
  click.addEventListener('click', function () {
    
  })
})
