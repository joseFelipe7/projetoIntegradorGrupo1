const hrefPrestadorLista = "http://localhost:5620/prestador/lista";
const inputPesquisa = document.getElementById('pesquisa-listaPrestadores');
const inputServicos = document.querySelectorAll('#selecionar-servicos li input');
const inputAvalicao = document.querySelectorAll('#selecionar-avaliacao li input');
const resultadoTexto = document.getElementById('resultadoPesquisaTexto');
const resultadoAvaliacao = document.getElementById('resultadoPesquisaAvaliacao');
const resultadoCategoria = document.getElementById('resultadoPesquisaCategoria');

const buttonPesquisa = document.getElementById('lupa-pesquisa');
const buttonLimpaPesquisaTexto = document.getElementById('limpa-pesquisaTexto');
const buttonLimpaPesquisaAvaliacao = document.getElementById('limpa-pesquisaAvaliacao');

if (inputPesquisa) {
  // evento para pesquisa pelo input de pesquisa
  buttonPesquisa.addEventListener('click', function () {
    let textoPesquisa = inputPesquisa.value
    if (document.location.href !== hrefPrestadorLista) {
      document.location.href = hrefPrestadorLista + "/" + textoPesquisa;
    } else {
      document.location.href += "/" + textoPesquisa;
  }
});

// evento para pesquisa pelo input de pesquisa + action do button enter
  inputPesquisa.addEventListener('keyup', function (event) {
    let textoPesquisa = inputPesquisa.value
    if (this.value.length > 0 && event.key == 'Enter') {
      if (document.location.href !== hrefPrestadorLista) {
        document.location.href = hrefPrestadorLista + "/" + textoPesquisa;
      } else {
        document.location.href += "/" + textoPesquisa;
    }
  }
});
}

// evento para limpar pesquisa e voltar a página inicial
if (buttonLimpaPesquisaTexto != null) {
  buttonLimpaPesquisaTexto.addEventListener('click', function () {
    document.location.href = hrefPrestadorLista;
  });
};

// evento para filtro pelo inputs de serviços
inputServicos.forEach(servico => {
  servico.addEventListener('click', function () {
    if (document.location.href !== hrefPrestadorLista) {
      document.location.href = hrefPrestadorLista + "/categoria/" + servico.value;
    } else {
      document.location.href = hrefPrestadorLista + "/categoria/" + servico.value;
    }
  });
});


// evento para filtro pelo inputs de avaliação
inputAvalicao.forEach(avaliacao => {
  avaliacao.addEventListener('click', function () {
    if (document.location.href !== hrefPrestadorLista) {
      document.location.href += `/${avaliacao.value}`;
    }
  });
});

// evento para limpar pesquisa quando tiver filtro avaliacao
if (buttonLimpaPesquisaAvaliacao != null) {
  buttonLimpaPesquisaAvaliacao.addEventListener('click', function () {
    if (document.location.pathname === `/prestador/lista/${resultadoTexto.value}/${resultadoAvaliacao.value}`) {
      document.location.pathname = `/prestador/lista/${resultadoTexto.value}`
    } else {
      document.location.pathname = `/prestador/lista/categoria/${resultadoCategoria.value}`
    }
});
}

