const inputBuscaHome = document.getElementById('pesquisaHome');
const botaoBuscaHome = document.getElementById('botaoBuscarHome');
const formBuscaHome = document.getElementById('formBuscaHome');

if (formBuscaHome) {
  botaoBuscaHome.addEventListener('click', function () {
    document.location.pathname = `/prestador/lista/${inputBuscaHome.value}`;
    console.log('teste')
  });

  inputBuscaHome.addEventListener('keyup', function (event) {
    if (event.key == 'Enter') {
      document.location.pathname = `/prestador/lista/${inputBuscaHome.value}`;
    }
  })
}

