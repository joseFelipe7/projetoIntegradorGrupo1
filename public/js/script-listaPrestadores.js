const inputPesquisa = document.getElementById('pesquisa-listaPrestadores');
const buttonPesquisa = document.getElementById('lupa-pesquisa');
const resultadoPesquisa = document.getElementById('resultadoPesquisa'); 
const urlPadrao = "http://localhost:5620/prestador/lista";


buttonPesquisa.addEventListener('click', function () {
  const textoPesquisa = inputPesquisa.value;
  document.location.href = urlPadrao + "/" + textoPesquisa;
})
