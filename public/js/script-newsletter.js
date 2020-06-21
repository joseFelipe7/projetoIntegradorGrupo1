const inputEmailNewsletter = document.querySelector('#emailNewsletter')
const inputNomeNewsletter  = document.querySelector('#nomeNewsletter')
const btnAssinarNewsletter = document.querySelector('#btnNewsletter')
const cotainerAlertas      = document.querySelector('#container-alertas')


const BASE_URL = "http://localhost:5620/api"



async function storeNewsletter(){
    let nome = inputNomeNewsletter.value.trim()
    let email = inputEmailNewsletter.value.trim()
    if(nome == ''){
        exibirAlerta(true,'Preencha o campo nome para assinar o newsletter')
    }else if(email.indexOf('@') == -1 ||  email.indexOf('.')  == -1 || email.length < 5){
        exibirAlerta(true,'Preencha um E-mail valido para assinar o newsletter')
    }else{
        let data = JSON.stringify({
            nomeNewsletter:inputNomeNewsletter.value,
            emailNewsletter: inputEmailNewsletter.value
        })
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:data
        };
        const resultado = await fetch(`${BASE_URL}/newsletter`, config)
        const resultadoJson = await resultado.json()

        if(resultado.status != 201){
            exibirAlerta(true,resultadoJson.msg)
        }else{      
            exibirAlerta(false,`${nome} recebera as ultimas atualizações da toolshall no seu E-mail ;)`)
        }
    }
    
}
function exibirAlerta(erro, mensagem){
    const divAlerta = document.createElement('div')
    divAlerta.setAttribute('class',`container alert ${erro ? 'alert-danger': 'alert-success'} alert-dismissible fade show`)
    divAlerta.setAttribute('role','alert')

    divAlerta.innerHTML += 
       `<strong> ${erro ? 'Erro': 'Parabens!'}</strong> 
        ${mensagem}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>`
    cotainerAlertas.appendChild(divAlerta)
    setTimeout(()=>{
        divAlerta.classList.remove('show')
    },5000)
    setTimeout(()=>{
        divAlerta.remove()
    },5300)

}
btnAssinarNewsletter.addEventListener('click', storeNewsletter)