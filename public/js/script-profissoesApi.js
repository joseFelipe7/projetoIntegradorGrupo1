fetch('https://famerco.jacad.com.br:443/academico/api/v1/basicos/profissoes/')
    .then(function(resultado){
        return resultado.json();
    })
    .then(function(profissoes){
        profissoes.forEach(profissao => {
            let profissoesAjax = document.getElementById('profissoesAjax')
            console.log(profissoes);
            let div = document.createElement('div');
            let prof = document.createElement('input');
        });
    })