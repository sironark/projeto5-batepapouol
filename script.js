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
    ulMensagens.innerHTML = ""
    let mensagens = axios.get('https://mock-api.driven.com.br/api/vm/uol/messages')
    mensagens.then(mensagensEnviadas);
    

    function mensagensEnviadas(resposta){
        let todasAsMensagens = resposta.data
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
    
    promisse.catch(tratarErroMensagem)
    
}

function tratarErroMensagem(erro){
console.log(erro.response.status)
window.location.reload()
}


function entrarNaSala(){
    
    const nomeUsuário = {
        name: seuNome
    }

   const promisse = axios.post('https://mock-api.driven.com.br/api/vm/uol/participants', nomeUsuário )
    promisse.then (entrouNaSala )
    promisse.catch(perguntaNome)

      
}


function entrouNaSala(resposta){
    const novoUsuario = resposta.data;
    const ulMensagens = document.querySelector('ul')
    ulMensagens.innerHTML += `<li> ${novoUsuario.name}</li>`
     setInterval(renderizarJaEnviadas,3000)
     
      setInterval(manterNaSala,5000);
    }
    

    function manterNaSala(){
    
        const atualizarNome = {
            name: `${seuNome}`
        }
    
       axios.post('https://mock-api.driven.com.br/api/vm/uol/status', atualizarNome )
    
        console.log('online')
          
    }





    