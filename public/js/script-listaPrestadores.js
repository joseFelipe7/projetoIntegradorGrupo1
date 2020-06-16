const inputPesquisa = document.getElementById('pesquisa-listaPrestadores');
const buttonPesquisa = document.getElementById('lupa-pesquisa');
const buttonLimpaPesquisa = document.getElementById('limpa-pesquisa');
const divResultadoPesquisa = document.querySelector('.lista-cardsPrestadores .row .resultadoPesquisa');
const resultadoPesquisa = document.getElementById('resultadoPesquisa'); 
const pesquisaAvaliacao = document.querySelectorAll('#filtroAvaliacao ul li input');
const urlPadrao = "http://localhost:5620/prestador/lista";

buttonPesquisa.addEventListener('click', function () {
  document.location.href = urlPadrao + "/" + inputPesquisa.value;
  divResultadoPesquisa.hidden = "";
  resultadoPesquisa.innerHTML = `<span> ${inputPesquisa.value} </span>`
});

inputPesquisa.addEventListener('keyup', function (event) {
  if (this.value.length > 0 && event.key == 'Enter') {
    document.location.href = urlPadrao + "/" + inputPesquisa.value;
    divResultadoPesquisa.hidden = "";
    resultadoPesquisa.innerHTML = `<span> ${inputPesquisa.value} </span>`
  }
});

buttonLimpaPesquisa.addEventListener('click', function () {
  document.location.href = urlPadrao;
  resultadoPesquisa.innerHTML = "";
  divResultadoPesquisa.hidden = true;
})

pesquisaAvaliacao.forEach(click => {
  click.addEventListener('click', function () {
    document.location.href = urlPadrao + `?nota=${click.value}`
  })
})
