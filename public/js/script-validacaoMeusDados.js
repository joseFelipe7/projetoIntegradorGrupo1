//função para simplificar as seleções
function selectId(input){
    return document.getElementById(input);
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