// função para simplificar a seleção
function selectId(input) {
  return document.getElementById(input);
}

// Inicio das validações do usuario PRESTADOR
let containerPrestador = selectId('containerPrestador');
let formularioPrestador = selectId('formularioPrestador');
let inputNome = selectId('prestador-inputNome1');
let inputEmail = selectId('prestador-inputEmail1');
let inputSenha = selectId('prestador-inputSenha1');
let inputRepetirSenha = selectId('repetir-inputSenha');
let inputCpf = selectId('prestador-inputCpf');
let buttonCadastrar = selectId('buttonPrestador');
let errorList = selectId('alert-cadP');
let errorListUl = document.querySelector('#alert-cadP ul');

// função para verificar se o campo ta vazio
function empty(input) {
  return input.value.trim() === "";
};

// função que gera mensagem de erros dos input's
function errorMsg(msg) {
  errorListUl.innerHTML += `<li> ${msg} </li>`;
};

// função para verificar se o nome tem no minimo 3 caracteres.
function verificarNome() {
  if (inputNome.value.length < 3) {
    event.preventDefault();
    errorList.hidden = "";
    errorMsg("Campo <strong>NOME</strong> inválido!");
    errorMsg("Deve conter 3 ou mais caracteres!");
  } else {
      errorList.hidden = true;
  };
};

// função verifica se o email é válido.
function verificarEmail() {
  inputEmail.onchange = function () {
    const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!EMAIL_REGEX.test(this.value)) {
      event.preventDefault();
      errorList.hidden = "";
      errorMsg("<strong>EMAIL inválido</strong>, digite um email válido.");
    } else {
      errorList.hidden = true;
    };
  };
};

// função que verifica se a senha está no padrão.
function verificarSenha() {
  const senha1 = inputSenha.value;
  const senha2 = inputRepetirSenha.value;
  if (senha1 !== senha2) {
    event.preventDefault();
    errorList.hidden = "";
    errorMsg("<strong>SENHAS</strong> não se coincidem!");
  } else if (senha1.length < 6 || senha2.length < 6) {
      event.preventDefault();
      errorList.hidden = "";
      errorMsg("O campo <strong>SENHA</strong> deve conter no mínimo 6 caracteres!");
  } else if (senha1.length > 12 || senha2.length > 12) {
      event.preventDefault();
      errorList.hidden = "";
      errorMsg("O campo <strong>SENHA</strong> deve conter no máximo 12 caracteres!");
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

// esse evento dispara cada vez que digitar no inputCpf 
inputCpf.addEventListener('input', function (event) {
  // event.target.value atribui o valor da mascaraCpf
  event.target.value = mascaraCpf(event.target.value);
}, false);

// função para verificar o cpf.
function verificarCpf() {
  // coloquei 14 pois ele faz a leitura dos pontos e do traço
  if (inputCpf.value.length < 14) {
    event.preventDefault();
    errorList.hidden = "";
    errorMsg("Campo <strong>CPF</strong> inválido!");
    errorMsg("Deve conter 11 dígitos!");
  } else {
      errorList.hidden = true;
  };
};

// função verifica se os inputs estão preenchido e se estão válidos.
function verificarInputs() {
  // limpa a lista de erro dentro de ul 
  errorListUl.innerHTML = "";

  // codição se o campo estiver vazio
  if (empty(inputNome)) {
    errorMsg("Campo <strong>NOME</strong> não prennchido!");
  } else {
    verificarNome();
  };

  if (empty(inputEmail)) {
    errorMsg("Campo <strong>EMAIL</strong> não prennchido!");
  } else {
    verificarEmail();
  };

  if (empty(inputSenha)) {
    errorMsg("Campo <strong>SENHA</strong> não prennchido!");
  } else if (empty(inputRepetirSenha)) {
    errorMsg("Campo <strong>REPETIR SENHA</strong> não prennchido!");
  } else {
    verificarSenha();
  };

  if (empty(inputCpf)) {
    errorMsg("Campo <strong>CPF</strong> não prennchido!");
  } else {
    verificarCpf();
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

// evento que verifica se os campos estão preeenchido, antes de fazer submit.
formularioPrestador.addEventListener('submit', function (event) {
  verificarInputs();
});
