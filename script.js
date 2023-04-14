axios.defaults.headers.common['Authorization'] = 'EBB4hFGiluI81dIglbTqGnch';

const arrayMensagem = [
    
]

function renderizarJaEnviadas(){

    const ulMensagens = document.querySelector('.batePapo')
    

    for(let i = 0; i<arrayMensagem.length; i++){
        let mensagem = arrayMensagem[i];
        console.log(mensagem);
        ulMensagens.innerHTML += 
        `<li> ${mensagem.nome} ${mensagem.indicacao} ${mensagem.destinatario} ${mensagem.texto}</li>`
        
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

    arrayMensagem.push(novoArrayMensagem)
    console.log(axios)

    console.log(arrayMensagem)

    renderizarJaEnviadas();

}

