console.log('oiee te amo Luh <3')
const inputEmailNewsletter = document.querySelector('#emailNewsletter')
const inputNomeNewsletter  = document.querySelector('#nomeNewsletter')
const btnAssinarNewsletter = document.querySelector('#btnNewsletter')


const BASE_URL = "http://localhost:5620/api"



async function storeNewsletter(){
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
    console.log(resultadoJson)
}
btnAssinarNewsletter.addEventListener('click', storeNewsletter)