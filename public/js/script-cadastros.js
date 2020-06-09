// função para simplificar a seleção
function selectId(input) {
  return document.getElementById(input);
}

// variaveis com elementos do PRESTADOR
const containerPrestador = selectId('containerPrestador');
const formularioPrestador = selectId('formularioPrestador');
const inputNomeP = selectId('prestador-inputNome');
const inputEmailP = selectId('prestador-inputEmail');
const inputSenhaP = selectId('prestador-inputSenha');
const inputRepetirSenhaP = selectId('prestador-inputRepetirSenha');
const inputCpfP = selectId('prestador-inputCpf');
const buttonCadastrarP = selectId('buttonPrestador');
const errorListP = selectId('alert-cadP');
const closeListErrorP = selectId('close-listP');
const errorListUlP = document.querySelector('#alert-cadP ul');

// variaveis com elementos do CONTRATANTE
const containerContratante = selectId('containerContratante');
const formularioContratante = selectId('formularioContratante');
const inputNomeC = selectId('contratante-inputNome');
const inputEmailC = selectId('contratante-inputEmail');
const inputSenhaC = selectId('contratante-inputSenha');
const inputRepetirSenhaC = selectId('contratante-inputRepetirSenha');
const inputCpfC = selectId('contratante-inputCpf');
const buttonCadastrarC = selectId('buttonContratante');
const errorListC = selectId('alert-cadC');
const closeListErrorC = selectId('close-listC');
const errorListUlC = document.querySelector('#alert-cadC ul');


// função para verificar se o campo ta vazio
function empty(input) {
  return input.value.trim() === "";
};

// função que gera mensagem de erros dos input's
function errorMsg(errorListUl, msg) {
  errorListUl.innerHTML += `<li> ${msg} </li>`;
};

// função para verificar se o nome tem no minimo 3 caracteres.
function verificarNome(inputNome, errorListUl, errorList) {
  if (inputNome.value.length < 3) {
    event.preventDefault();
    errorList.hidden = "";
    errorMsg(errorListUl, "Campo <strong>NOME</strong> inválido! deve conter 3 ou mais caracteres.");
  } else {
      errorList.hidden = true;
  };
};

// função verifica se o email é válido.
function verificarEmail(inputEmail, errorListUl, errorList) {
  const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let verifyEmail = EMAIL_REGEX.test(inputEmail.value);
  if (verifyEmail === false) {
    event.preventDefault();
    errorList.hidden = "";
    errorMsg(errorListUl, "<strong>EMAIL inválido</strong>, digite um email válido.");
  } else {
      errorList.hidden = true;
  };
};

// função que verifica se a senha está no padrão.
function verificarSenha(inputSenha, inputRepetirSenha, errorListUl, errorList) {
  const senha1 = inputSenha.value;
  const senha2 = inputRepetirSenha.value;
  if (senha1 !== senha2) {
    event.preventDefault();
    errorList.hidden = "";
    errorMsg(errorListUl, "<strong>SENHAS</strong> não se coincidem!");
  } else if (senha1.length < 6 || senha2.length < 6) {
      event.preventDefault();
      errorList.hidden = "";
      errorMsg(errorListUl, "O campo <strong>SENHA</strong> deve conter no mínimo 6 caracteres!");
  } else if (senha1.length > 12 || senha2.length > 12) {
      event.preventDefault();
      errorList.hidden = "";
      errorMsg(errorListUl, "O campo <strong>SENHA</strong> deve conter no máximo 12 caracteres!");
  } else {
      errorList.hidden = true;
  }
};


// função que criar mascara para o inputCpf
function mascaraCpf(value) {
  return value
          // cada replace retorna uma string nova
          // essa 1ª regex diz que o campo so pode ter número, e caso digite
          // letra ele coloca um valor vazio.
          .replace(/\D/g, '')
          // essa 2ª regex faz adicionar um ponto depois do 3°numero e após
          // o ponto digite o 4°número.
          .replace(/(\d{3})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d)/, '$1.$2')
          // essa 4ª regex faz adicionar um traço depois do 3°numero e após
          // o traço venha 1 ou 2 números.
          .replace(/(\d{3})(\d{1,2})/, '$1-$2')
          // esse 5º regex limita o tamanho do CPF, e tudo que passar dos
          // ultimos 2 digitos será substituido pelo msm.
          .replace(/(-\d{2})\d+?$/, '$1')     
};


// função para verificar o cpf.
function verificarCpf(inputCpf, errorListUl, errorList) {
  // coloquei 14 pois ele faz a leitura dos pontos e do traço
  if (inputCpf.value.length < 14) {
    event.preventDefault();
    errorList.hidden = "";
    errorMsg(errorListUl, "Campo <strong>CPF</strong> inválido! deve conter 11 dígitos.");
  } else {
      errorList.hidden = true;
  };
};

// função verifica se os inputs estão preenchido e se estão válidos.
function verificarInputs(inputNome, inputEmail, inputSenha, inputRepetirSenha,
                        inputCpf, errorList, errorListUl) {
  // limpa a lista de erro dentro de ul 
  errorListUl.innerHTML = "";

  // codição se o campo estiver vazio
  if (empty(inputNome)) {
    errorMsg(errorListUl, "Campo <strong>NOME</strong> não prennchido!");
  } else {
    verificarNome(inputNome, errorListUl, errorList);
  };

  if (empty(inputEmail)) {
    errorMsg(errorListUl, "Campo <strong>EMAIL</strong> não prennchido!");
  } else {
    verificarEmail(inputEmail, errorListUl, errorList);
  };

  if (empty(inputSenha)) {
    errorMsg(errorListUl, "Campo <strong>SENHA</strong> não prennchido!");
  } else if (empty(inputRepetirSenha)) {
    errorMsg(errorListUl, "Campo <strong>REPETIR SENHA</strong> não prennchido!");
  } else {
    verificarSenha(inputSenha, inputRepetirSenha, errorListUl, errorList);
  };

  if (empty(inputCpf)) {
    errorMsg(errorListUl, "Campo <strong>CPF</strong> não prennchido!");
  } else {
    verificarCpf(inputCpf, errorListUl, errorList);
  };

  // condição verifica se tem error e se sim gera a lista de erros
  if (errorListUl.querySelectorAll('li').length > 0) {
    // se formulário tiver erro esse prevent não deixa o mesmo ser enviado
    event.preventDefault();
     // se tiver erro ele coloca o hidden null, assim a msg aparece
    errorList.hidden = "";
  } else {
    errorList.hidden = true;
 };
};

// esse if faz a condição de se tiver no caminho /cadastro/prestador faça os eventos
if (document.location.pathname === "/cadastro/prestador") {
  // esse evento dispara cada vez que digitar no inputCpf 
  inputCpfP.addEventListener('input', function (event) {
    // event.target.value atribui o valor da mascaraCpf
    event.target.value = mascaraCpf(event.target.value);
  }, false);

  // evento que verifica se os campos estão preeenchido, antes de fazer submit.
  formularioPrestador.addEventListener('submit', function (event) {
    verificarInputs(inputNomeP, inputEmailP, inputSenhaP, inputRepetirSenhaP,
                    inputCpfP, errorListP, errorListUlP) ;
  });

  // evento fecha lista de erro e zera o elemento ul
  closeListErrorP.onclick = function () {
    errorListUlP.innerHTML = "";
  };
};

// esse if faz a condição de se tiver no caminho /cadastro/contratante faça os eventos
if (document.location.pathname === "/cadastro/contratante") {
  inputCpfC.addEventListener('input', function (event) {
    event.target.value = mascaraCpf(event.target.value);
  }, false);

  formularioContratante.addEventListener('submit', function (event) {
    verificarInputs(inputNomeC, inputEmailC, inputSenhaC, inputRepetirSenhaC,
                    inputCpfC, errorListC, errorListUlC) ;
  });

  
  closeListErrorC.onclick = function () {
    errorListUlC.innerHTML = "";
  };
};