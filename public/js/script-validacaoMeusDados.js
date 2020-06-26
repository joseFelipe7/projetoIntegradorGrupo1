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

const formep = selectId('formdp');//endereco
const cepp = selectId('cepp');
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

const buttonCepUp = selectId('buscarCepUp');
const buttonCepp = selectId('buscarCepp');

buttonCepUp.addEventListener('click', function () {
    console.log("teste");
})

buttonCepp.addEventListener('click', function () {
    console.log("teste");
})

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


//validação para campos vazios - area contratante

//validação para campos vazios - dados pessoais
formdp1.addEventListener("submit", function(e){
    errorListUl.innerHTML = "";

    if(empty(nome)){
        errorMessage("Campo <b>nome</b> não preenchido");
    }
    if(empty(cpf)){
        errorMessage("Campo <b>CPF</b> não preenchido");
    }
    if(empty(nascimento)){
        errorMessage("Campo <b>Data de nascimento</b> não preenchido");
    }
    if(errorListUl.querySelectorAll('li').length > 0){
        e.preventDefault();
        errorList.hidden = "";
    }

})


//validação para campos vazios - endereço
forme.addEventListener("submit", function(e){
    errorListUl.innerHTML = "";

    if(empty(cep)){
        errorMessage("Campo <b>CEP</b> não preenchido");
    }
    if(empty(UF)){
        errorMessage("Campo <b>UF</b> não preenchido");
    }
    if(empty(cidade)){
        errorMessage("Campo <b>Cidade</b> não preenchido");
    }
    if(empty(rua)){
        errorMessage("Campo <b>Logradouro</b> não preenchido");
    }
    if(empty(numero)){
        errorMessage("Campo <b>Número</b> não preenchido");
    }
   
    if(errorListUl.querySelectorAll('li').length > 0){
        e.preventDefault();
        errorList.hidden = "";
    }

})

//validação para campos vazios - contatos
formc.addEventListener("submit", function(e){
    errorListUl.innerHTML = "";

    if(empty(cel1)){
        errorMessage("Campo <b>Celular principal</b> não preenchido");
    }
    if(empty(email1)){
        errorMessage("Campo <b>E-mail principal</b> não preenchido");
    }
    
    if(errorListUl.querySelectorAll('li').length > 0){
        e.preventDefault();
        errorList.hidden = "";
    }

})

//validação para campos vazios - conta
formcon.addEventListener("submit", function(e){
    errorListUl.innerHTML = "";

    if(empty(senha1)){
        errorMessage("Campo <b>Senha atual</b> não preenchido");
    }
    if(empty(senha2)){
        errorMessage("Campo <b>Nova senha</b> não preenchido");
    }
    if(empty(email)){
        errorMessage("Campo <b>E-mail de cadastro</b> não preenchido");
    }
    
    if(errorListUl.querySelectorAll('li').length > 0){
        e.preventDefault();
        errorList.hidden = "";
    }

})

//validação para campos vazios - area prestador

//validação para campos vazios - profissionais
formprop.addEventListener("submit", function(e){
    errorListUl.innerHTML = "";

    if(empty(profissao)){
        errorMessage("Campo <b>Profissão</b> não preenchido");
    }
    if(empty(data)){
        errorMessage("Campo <b>Data que iniciou na profissão</b> não preenchido");
    }
    if(empty(habilidades)){
        errorMessage("Campo <b>Descrição</b> não preenchido");
    }
    if(errorListUl.querySelectorAll('li').length > 0){
        e.preventDefault();
        errorList.hidden = "";
    }

})

//validação para campos vazios - dados pessoais
formdpp.addEventListener("submit", function(e){
    errorListUl.innerHTML = "";

    if(empty(nomep)){
        errorMessage("Campo <b>nome</b> não preenchido");
    }
    if(empty(cpfp)){
        errorMessage("Campo <b>CPF</b> não preenchido");
    }
    if(empty(nascimentop)){
        errorMessage("Campo <b>Data de nascimento</b> não preenchido");
    }
    if(errorListUl.querySelectorAll('li').length > 0){
        e.preventDefault();
        errorList.hidden = "";
    }

})

//validação para campos vazios - endereço
formep.addEventListener("submit", function(e){
    errorListUl.innerHTML = "";

    if(empty(cepp)){
        errorMessage("Campo <b>CEP</b> não preenchido");
    }
    if(empty(UFp)){
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

})


//validação para campos vazios - contatos
formcp.addEventListener("submit", function(e){
    errorListUl.innerHTML = "";

    if(empty(cel1p)){
        errorMessage("Campo <b>Celular principal</b> não preenchido");
    }
    if(empty(email1p)){
        errorMessage("Campo <b>E-mail principal</b> não preenchido");
    }
    
    if(errorListUl.querySelectorAll('li').length > 0){
        e.preventDefault();
        errorList.hidden = "";
    }

})

//validação para campos vazios - conta
formconp.addEventListener("submit", function(e){
    errorListUl.innerHTML = "";

    if(empty(senha1p)){
        errorMessage("Campo <b>Senha atual</b> não preenchido");
    }
    if(empty(senha2p)){
        errorMessage("Campo <b>Nova senha</b> não preenchido");
    }
    if(empty(emailp)){
        errorMessage("Campo <b>E-mail de cadastro</b> não preenchido");
    }
    
    if(errorListUl.querySelectorAll('li').length > 0){
        e.preventDefault();
        errorList.hidden = "";
    }

})