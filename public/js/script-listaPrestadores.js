const pathPadrao = "/prestador/lista";
const buttonPesquisa = document.getElementById('lupa-pesquisa');
const buttonLimpaPesquisa = document.getElementById('limpa-pesquisa');
const inputPesquisa = document.getElementById('pesquisa-listaPrestadores');
const inputServicos = document.querySelectorAll('#selecionar-servicos li input');


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
if (document.location.pathname !== pathPadrao) {
  buttonLimpaPesquisa.addEventListener('click', function () {
    document.location.pathname = pathPadrao;
  });
};

// evento para filtro pelo inputs de serviços
inputServicos.forEach(servico => {
  servico.addEventListener('click', function () {
    if (document.location.pathname !== pathPadrao) {
      document.location.pathname = pathPadrao + "/categoria/" + servico.value;
    } else {
      document.location.pathname += "/categoria/" + servico.value;
    }
  });
});





