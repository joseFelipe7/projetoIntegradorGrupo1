//função para simplificar as seleções
function selectId(id){
    return document.getElementById(id);
}

//variaveis contratante
const formdp1 = selectId('formdp1');//dados pessoais
const nome = selectId('nome');
const cpf = selectId('cpf');
const nascimento = selectId('nascimento');

const forme = selectId('formdp');//endereco
const cep = selectId('cep');
const uf = selectId('UF');
const cidade = selectId('cidade');
const rua = selectId('rua');
const numero = selectId('numero');
const complemento = selectId('complemento');

const formc = selectId('formdp');//contatos
const cel1 = selectId('cel1');
const cel2 = selectId('cel2');
const tel = selectId('tel');
const email1 = selectId('email1');
const email2 = selectId('email2');

const formcon = selectId('formdp');//conta
const senha1 = selectId('senha1');
const senha2 = selectId('senha2');
const email = selectId('email');

//variaveis prestador
const formprop = selectId('formdp');//profissionais
const profissao = selectId('profissao');
const data = selectId('data');
const habilidades = selectId('habilidades');

const formdpp = selectId('formdpp');//dados pessoais
const nomep = selectId('nomep');
const cpfp = selectId('cpfp');
const nascimentop = selectId('nascimentop');

const formeUp = selectId('formeUp');//endereco update
const cepUp = selectId('cepUp');
const errorCepUp = selectId('errorCEPUp');
const buttonCepUp = selectId('buscarCepUp');
const ufUp = selectId('UFUp');
const cidadeUp = selectId('cidadeUp');
const ruaUp = selectId('ruaUp');
const numeroUp = selectId('numeroUp');
const complementoUp = selectId('complementoUp');

const formep = selectId('formep');//endereco post
const cepp = selectId('cepp');
const errorCepp = selectId('errorCEPp');
const buttonCepp = selectId('buscarCepp');
const ufp = selectId('UFp');
const cidadep = selectId('cidadep');
const ruap = selectId('ruap');
const numerop = selectId('numerop');
const complementop = selectId('complementop');

const formcp = selectId('formdp');//contatos
const cel1p = selectId('cel1p');
const cel2p = selectId('cel2p');
const telp = selectId('telp');
const email1p = selectId('email1p');
const email2p = selectId('email2p');

const formconp = selectId('formdp');//conta
const senha1p = selectId('senha1p');
const senha2p = selectId('senha2p');
const emailp = selectId('emailp');


//verifica se o campo está vazio
function empty(input){
    return input.value.trim() === "";
}

//adiciona li contendo msg de erro
function errorMessage(message){
    errorListUl.innerHTML += "<li>" + message + "</li>";
}

//variaveis error-list
const errorListUl = document.querySelector('#error-list ul');
const errorList = selectId('#error-list');


// //validação para campos vazios - area contratante

// //validação para campos vazios - dados pessoais
// formdp1.addEventListener("submit", function(e){
//     errorListUl.innerHTML = "";

//     if(empty(nome)){
//         errorMessage("Campo <b>nome</b> não preenchido");
//     }
//     if(empty(cpf)){
//         errorMessage("Campo <b>CPF</b> não preenchido");
//     }
//     if(empty(nascimento)){
//         errorMessage("Campo <b>Data de nascimento</b> não preenchido");
//     }
//     if(errorListUl.querySelectorAll('li').length > 0){
//         e.preventDefault();
//         errorList.hidden = "";
//     }

// })


// //validação para campos vazios - endereço
// forme.addEventListener("submit", function(e){
//     errorListUl.innerHTML = "";

//     if(empty(cep)){
//         errorMessage("Campo <b>CEP</b> não preenchido");
//     }
//     if(empty(UF)){
//         errorMessage("Campo <b>UF</b> não preenchido");
//     }
//     if(empty(cidade)){
//         errorMessage("Campo <b>Cidade</b> não preenchido");
//     }
//     if(empty(rua)){
//         errorMessage("Campo <b>Logradouro</b> não preenchido");
//     }
//     if(empty(numero)){
//         errorMessage("Campo <b>Número</b> não preenchido");
//     }
   
//     if(errorListUl.querySelectorAll('li').length > 0){
//         e.preventDefault();
//         errorList.hidden = "";
//     }

// })

// //validação para campos vazios - contatos
// formc.addEventListener("submit", function(e){
//     errorListUl.innerHTML = "";

//     if(empty(cel1)){
//         errorMessage("Campo <b>Celular principal</b> não preenchido");
//     }
//     if(empty(email1)){
//         errorMessage("Campo <b>E-mail principal</b> não preenchido");
//     }
    
//     if(errorListUl.querySelectorAll('li').length > 0){
//         e.preventDefault();
//         errorList.hidden = "";
//     }

// })

// //validação para campos vazios - conta
// formcon.addEventListener("submit", function(e){
//     errorListUl.innerHTML = "";

//     if(empty(senha1)){
//         errorMessage("Campo <b>Senha atual</b> não preenchido");
//     }
//     if(empty(senha2)){
//         errorMessage("Campo <b>Nova senha</b> não preenchido");
//     }
//     if(empty(email)){
//         errorMessage("Campo <b>E-mail de cadastro</b> não preenchido");
//     }
    
//     if(errorListUl.querySelectorAll('li').length > 0){
//         e.preventDefault();
//         errorList.hidden = "";
//     }

// })

// //validação para campos vazios - area prestador

// //validação para campos vazios - profissionais
// formprop.addEventListener("submit", function(e){
//     errorListUl.innerHTML = "";

//     if(empty(profissao)){
//         errorMessage("Campo <b>Profissão</b> não preenchido");
//     }
//     if(empty(data)){
//         errorMessage("Campo <b>Data que iniciou na profissão</b> não preenchido");
//     }
//     if(empty(habilidades)){
//         errorMessage("Campo <b>Descrição</b> não preenchido");
//     }
//     if(errorListUl.querySelectorAll('li').length > 0){
//         e.preventDefault();
//         errorList.hidden = "";
//     }

// })

// //validação para campos vazios - dados pessoais
// formdpp.addEventListener("submit", function(e){
//     errorListUl.innerHTML = "";

//     if(empty(nomep)){
//         errorMessage("Campo <b>nome</b> não preenchido");
//     }
//     if(empty(cpfp)){
//         errorMessage("Campo <b>CPF</b> não preenchido");
//     }
//     if(empty(nascimentop)){
//         errorMessage("Campo <b>Data de nascimento</b> não preenchido");
//     }
//     if(errorListUl.querySelectorAll('li').length > 0){
//         e.preventDefault();
//         errorList.hidden = "";
//     }

// })

// condição quando o formulário de endereço modo post aparecer
if (formep) {
    function limpaForms() {
        //Limpa valores do formulário.
        ufp.value=("");
        cidadep.value=("");
        ruap.value=("");
    }
      
    function callbackEndereco(conteudo) {
      if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        ufp.value=(conteudo.uf);
        cidadep.value=(conteudo.localidade);
        ruap.value=(conteudo.logradouro);
      } else {
        //CEP não Encontrado.
        errorCepp.innerHTML = ""
        limpaForms();
        errorCepp.innerHTML += `
        <div class="alert alert-warning alert-dismissible fade show d-flex justify-content-start align-items-center  m-0 pt-1 pb-1 pl-2 pr-3" role="alert">
            CEP não encontrado.
            <button type="button" class="close m-0 pt-1 pb-1 pl-1 pr-2" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        `
        }
    }
      
    function pesquisacep(valor) {
      const cep = valor.replace(/\D/g, '');
      if (cep != "") {
        const validacep = /^[0-9]{8}$/;
        if(validacep.test(cep)) {
            ufp.value="...";
            cidadep.value="...";
            ruap.value="...";
      
            const script = document.createElement('script');
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=callbackEndereco';
            document.body.appendChild(script);
        } else {
                //cep é inválido.
                errorCepp.innerHTML = ""
                limpaForms();
                errorCepp.innerHTML += `
                <div class="alert alert-warning alert-dismissible fade show d-flex justify-content-start align-items-center m-0 pt-1 pb-1 pl-2 pr-3" role="alert">
                    Formato de CEP inválido.
                    <button type="button" class="close m-0 pt-1 pb-1 pl-1 pr-2" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                `
                };
      } else{
                //cep sem valor, limpa formulário.
                limpaForms();
            };
    };

    // button de busca cep no modo post
    buttonCepp.addEventListener('click', function () {
        pesquisacep(cepp.value);
    });

    //validação para campos vazios - endereço
    formep.addEventListener("submit", function(e){
        errorListUl.innerHTML = "";
        if(empty(cepp)){
            errorMessage("Campo <b>CEP</b> não preenchido");
        }
        if(empty(ufp)){
            errorMessage("Campo <b>UF</b> não preenchido");
        }
        if(empty(cidadep)){
            errorMessage("Campo <b>Cidade</b> não preenchido");
        }
        if(empty(ruap)){
            errorMessage("Campo <b>Logradouro</b> não preenchido");
        }
        if(empty(numerop)){
            errorMessage("Campo <b>Número</b> não preenchido");
        }
        if(errorListUl.querySelectorAll('li').length > 0){
            e.preventDefault();
            errorList.hidden = "";
        }
    });
};

// condição quando o formulário de endereço modo put aparecer
if (formeUp) {
    function limpaForms() {
        //Limpa valores do formulário.
        ufUp.value=("");
        cidadeUp.value=("");
        ruaUp.value=("");
    }
      
    function callbackEndereco(conteudo) {
      if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        ufUp.value=(conteudo.uf);
        cidadeUp.value=(conteudo.localidade);
        ruaUp.value=(conteudo.logradouro);
      } else {
        //CEP não Encontrado.
        errorCepUp.innerHTML = ""
        limpaForms();
        errorCepUp.innerHTML += `
        <div class="alert alert-warning alert-dismissible fade show d-flex justify-content-start align-items-center  m-0 pt-1 pb-1 pl-2 pr-3" role="alert">
            CEP não encontrado.
            <button type="button" class="close m-0 pt-1 pb-1 pl-1 pr-2" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        `
        }
    }
      
    function pesquisacep(valor) {
      const cep = valor.replace(/\D/g, '');
      if (cep != "") {
        const validacep = /^[0-9]{8}$/;
        if(validacep.test(cep)) {
            ufUp.value="...";
            cidadeUp.value="...";
            ruaUp.value="...";
      
            const script = document.createElement('script');
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=callbackEndereco';
            document.body.appendChild(script);
        } else {
                //cep é inválido.
                errorCepUp.innerHTML = ""
                limpaForms();
                errorCepUp.innerHTML += `
                <div class="alert alert-warning alert-dismissible fade show d-flex justify-content-start align-items-center m-0 pt-1 pb-1 pl-2 pr-3" role="alert">
                    Formato de CEP inválido.
                    <button type="button" class="close m-0 pt-1 pb-1 pl-1 pr-2" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                `
                };
      } else{
                //cep sem valor, limpa formulário.
                limpaForms();
            };
    };

    // button de busca cep no modo put
    buttonCepUp.addEventListener('click', function () {
        pesquisacep(cepUp.value);
    });

    //validação para campos vazios - endereço
    formeUp.addEventListener("submit", function(e){
        errorListUl.innerHTML = "";
        if(empty(cepUp)){
            errorMessage("Campo <b>CEP</b> não preenchido");
        }
        if(empty(ufUp)){
            errorMessage("Campo <b>UF</b> não preenchido");
        }
        if(empty(cidadeUp)){
            errorMessage("Campo <b>Cidade</b> não preenchido");
        }
        if(empty(ruaUp)){
            errorMessage("Campo <b>Logradouro</b> não preenchido");
        }
        if(empty(numeroUp)){
            errorMessage("Campo <b>Número</b> não preenchido");
        }
        if(errorListUl.querySelectorAll('li').length > 0){
            e.preventDefault();
            errorList.hidden = "";
        }
    });
}


// //validação para campos vazios - contatos
// formcp.addEventListener("submit", function(e){
//     errorListUl.innerHTML = "";

//     if(empty(cel1p)){
//         errorMessage("Campo <b>Celular principal</b> não preenchido");
//     }
//     if(empty(email1p)){
//         errorMessage("Campo <b>E-mail principal</b> não preenchido");
//     }
    
//     if(errorListUl.querySelectorAll('li').length > 0){
//         e.preventDefault();
//         errorList.hidden = "";
//     }

// })

// //validação para campos vazios - conta
// formconp.addEventListener("submit", function(e){
//     errorListUl.innerHTML = "";

//     if(empty(senha1p)){
//         errorMessage("Campo <b>Senha atual</b> não preenchido");
//     }
//     if(empty(senha2p)){
//         errorMessage("Campo <b>Nova senha</b> não preenchido");
//     }
//     if(empty(emailp)){
//         errorMessage("Campo <b>E-mail de cadastro</b> não preenchido");
//     }
    
//     if(errorListUl.querySelectorAll('li').length > 0){
//         e.preventDefault();
//         errorList.hidden = "";
//     }

// })