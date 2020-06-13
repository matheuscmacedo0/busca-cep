// Seletores
const cepInput = document.querySelector('#CEP');
const ruaInput = document.querySelector('#rua');
const bairroInput = document.querySelector('#bairro');
const ufInput = document.querySelector('#UF')


// Funções
const buscaCep = (evento) => {
    const cepDigitado = evento.target.value;

    if (cepDigitado.length != 8) {
        // saindo da função com return vazio
        return;
    }

    fetch(`https://viacep.com.br/ws/${cepDigitado}/json`)
        .then((resposta) => resposta.json())
        .then((dados) => {
            ruaInput.value = dados.logradouro;
            bairroInput.value = dados.bairro;
            ufInput.value = dados.uf;
            cepInput.value = dados.cep;
        })
}

// Eventos
cepInput.oninput = buscaCep;

// fetch('https://viacep.com.br/ws/01001000/json/')
// .then((resposta) => { console.log(resposta.json())  })
// .then(dados => { console.log(dados)  })
