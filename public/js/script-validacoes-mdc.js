//função para simplificar as seleções
//function selectId(id){
//    return document.getElementById(id);
//}

//variaveis contratante
//const formularioc = selectId('formdcup1');//dados pessoais
//const nomec = selectId('nomecUp');
//const nascimentoc = selectId('nascimentocUp');

//const formulariocpc = selectId('formcpc');//contatos
//const 


 //validação para campos vazios - area contratante
 //if(formularioc){
     //verifica se o campo está vazio
//function empty(input){
 //   return input.value.trim() === "";
//}

//adiciona li contendo msg de erro
//function errorMessage(message){
 //   errorListUl.innerHTML += "<li>" + message + "</li>";
//}

//variaveis error-list
//const errorListUl = document.querySelector('#error-list ul');
//const errorList = selectId('#error-list');
 //validação para campos vazios - dados pessoais
   // formularioc.addEventListener("submit", function(e){
   //  errorListUl.innerHTML = "";

  //  if(empty(nomec)){
   //      errorMessage("Campo <b>nome</b> não pode ser vazio");
   //  }
   // if(empty(nascimentoc)){
    //    errorMessage("Campo <b>Data de nascimento</b> não preenchido");
    // }
    //if(errorListUl.querySelectorAll('li').length > 0){
    //     e.preventDefault();
    //    errorList.hidden = "";
   //  }

//})



//}

//formulatio update - contatos

function selectId(input){
  return document.getElementById(input)
}
const formulariocup = selectId('formcpc')
const celular1 = selectId('cel1')
const email1 = selectId('email1')

if (formulariocup) {
  function limpaForms() {
      //Limpa valores do formulário.
      celular1.value=("");
      email1.value=("");
      
  }

if(formulariocup){
  formulariocup.addEventListener("submit", function(ev){
    ev.preventDefault();

    if(celular1.value === ""){
      alert('Campo Celular não preenchido')
    }
  })
}
