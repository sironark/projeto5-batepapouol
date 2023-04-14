axios.defaults.headers.common['Authorization'] = 'EBB4hFGiluI81dIglbTqGnch';
seuNome = prompt('Qual seu nome?')
entrarNaSala();

const arrayMensagem = []

setInterval(renderizarJaEnviadas, 5000)

 

function renderizarJaEnviadas(){
console.log('atualizado')
    const ulMensagens = document.querySelector('.batePapo')
    let mensagens = axios.get('https://mock-api.driven.com.br/api/vm/uol/messages')
    mensagens.then(mensagensEnviadas);
    

    function mensagensEnviadas(resposta){
        let todasAsMensagens = resposta.data

    for(let i = 0; i<todasAsMensagens.length; i++){
        const mensagem = todasAsMensagens[i];
        ulMensagens.innerHTML += 
        `<li> ${mensagem.time} ${mensagem.from} ${mensagem.to} ${mensagem.text} </li>`
        
    }
    
}

    
}



function enviarMensagem(){
    buscarInput = document.querySelector('input')
    console.log(buscarInput)

    const novoArrayMensagem = {
        nome: 'João', 
        indicacao:'para', 
        destinatario: 'Todos:',
        texto: buscarInput.value
    }

    //axios.post('https://mock-api.driven.com.br/api/vm/uol/participants',novoArrayMensagem)
    renderizarJaEnviadas();

}




function entrarNaSala(){
    
    const nomeUsuário = {
        name: `${seuNome}`
    }

   const promisse = axios.post('https://mock-api.driven.com.br/api/vm/uol/participants', nomeUsuário )
    promisse.then (entrouNaSala )
      
}


function entrouNaSala(resposta){
    const novoUsuario = resposta.data;
    const ulMensagens = document.querySelector('ul')
    ulMensagens.innerHTML += `<li> ${novoUsuario.name}</li>`
        renderizarJaEnviadas()
    }
    











function erroNome(){
    console.log(erroNoNome)
}


/* setInterval(manterNaSala, 5000);


    function manterNaSala(){
axios.post('https://mock-api.driven.com.br/api/vm/uol/status', nomeUsuário)
    }
    */
