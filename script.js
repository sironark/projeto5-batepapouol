axios.defaults.headers.common['Authorization'] = 'EBB4hFGiluI81dIglbTqGnch';
perguntaNome()
const arrayMensagem = []








function perguntaNome(){
    seuNome = prompt('Qual seu nome?')
    entrarNaSala();
}


function renderizarJaEnviadas(){
console.log('atualizado')
    let ulMensagens = document.querySelector('.batePapo')
    console.log(ulMensagens)
    let mensagens = axios.get('https://mock-api.driven.com.br/api/vm/uol/messages')
    mensagens.then(mensagensEnviadas);
    

    function mensagensEnviadas(resposta){
        let todasAsMensagens = resposta.data
console.log(todasAsMensagens)
    for(let i = 0; i<todasAsMensagens.length; i++){
        let mensagem = todasAsMensagens[i];
        ulMensagens.innerHTML += 
        `<li> ${mensagem.time} ${mensagem.from} ${mensagem.to} ${mensagem.text} </li>`
        
    }
    
}

    
}



function enviarMensagem(){
    const inputMensagem = document.querySelector('input')
    
    console.log(inputMensagem.value)
    
    const novaMensagem = {
        from: seuNome,
        to: "Todos",
        text: inputMensagem.value,
        type: "message" 
    }
    
    const promisse = axios.post('https://mock-api.driven.com.br/api/vm/uol/messages',novaMensagem)
    promisse.then(renderizarJaEnviadas)

}




function entrarNaSala(){
    
    const nomeUsuário = {
        name: `${seuNome}`
    }

   const promisse = axios.post('https://mock-api.driven.com.br/api/vm/uol/participants', nomeUsuário )
    promisse.then (entrouNaSala )
    promisse.catch(perguntaNome)

      
}


function entrouNaSala(resposta){
    const novoUsuario = resposta.data;
    const ulMensagens = document.querySelector('ul')
    ulMensagens.innerHTML += `<li> ${novoUsuario.name}</li>`
        renderizarJaEnviadas()

        setInterval(manterNaSala,5000);
    }
    

    function manterNaSala(){
    
        const atualizarNome = {
            name: `${seuNome}`
        }
    
       axios.post('https://mock-api.driven.com.br/api/vm/uol/status', atualizarNome )
    
        console.log('online')
          
    }





/* setInterval(manterNaSala, 5000);


    function manterNaSala(){
axios.post('https://mock-api.driven.com.br/api/vm/uol/status', nomeUsuário)
    }
    */
