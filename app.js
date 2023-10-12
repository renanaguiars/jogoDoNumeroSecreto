let listaNumeros = [];
let numLimite = 10;
let numSecreto = gerarNumAleatorio();
let tentativas = 1;

exibirMsgInicial();

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMsgInicial(){
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p', 'Escolha um número entre 1 e 10');
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    
        if(chute == numSecreto) {
            exibirTexto('h1', 'ACERTOU!');
            let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
            let msgTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
            exibirTexto('p', msgTentativas);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
            if(chute > numSecreto) {
                exibirTexto('h1', 'ERROU...');
                exibirTexto('p', 'O número secreto é MENOR');
            } else {
                exibirTexto('h1', 'ERROU...');
                exibirTexto('p', 'O número secreto é MAIOR');
            }
        } 
        tentativas++;
        limpaCampo();
}

function reiniciarJogo(){
    numSecreto = gerarNumAleatorio();
    limpaCampo();
    tentativas = 1;
    exibirMsgInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function limpaCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function gerarNumAleatorio(){
    let numEscolhido = parseInt(Math.random() * numLimite + 1);
    let qtdElementosLista = listaNumeros.length;

    if(qtdElementosLista == numLimite){
        listaNumeros = [];
    }

    if(listaNumeros.includes(numEscolhido)) {
        return gerarNumAleatorio();
    } else {
        listaNumeros.push(numEscolhido);
        console.log(listaNumeros);
        return numEscolhido;
    }
}


