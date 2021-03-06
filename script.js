let pontuacaoJogador = 0;

let pontuacaoComputador = 0;

let saida_pontuacao_jogador = [saida = document.querySelector('.pontuacao-jogador'),
pontuacao = 1];

let saida_pontuacao_computador = [saida = document.querySelector('.pontuacao-computador'),
pontuacao = 1];

let par = document.querySelector('#par');

let impar = document.querySelector('#impar');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function comecar(){
    let jogador = [nome = document.querySelector('#nome_do_jogador').value,

    campo_nome = document.querySelector('#jogador_nome')];

    jogador[1].innerHTML = jogador[0];

    let rodadas = document.querySelector('#numero_de_rodadas').value;

    if(jogador[0] == ""){
        alert("Insira um nome para o jogador");
    } else {
        if(par.checked==false && impar.checked==false) {
            alert("Marque alguma das opções");
        } else {
            if(rodadas%2==0 || rodadas<=0){
                alert("Insira um valor ímpar, de preferência um valor positivo")
            } else {
                let box = document.querySelector('.box-hidden').classList.add('box-block');

                let botaoComecar = document.querySelector('#botaoComecar').classList.add('botao-comecar-hidden');

                let instrucoes = document.querySelector('.instrucoes').classList.add('instrucoes-hidden');

                return((rodadas/2)+0.5);
            }   
        }  
    }    
}

async function apostar(){
    let valor = parseInt(document.querySelector('.campo').value);

    let botao_aposta = document.querySelector('#botao_aposta');

    if(par.checked){
        if(valor>=1 && valor<=10){
            let armazenar_valor_computador = document.querySelector('.valor-computador');
    
            armazenar_valor_computador.innerHTML = "esperando o computador...";
    
            await sleep(2000)
    
            let valorComputador = Math.floor(Math.random()*11);
    
            if((valor+valorComputador)%2==0){
                pontuacaoJogador++;
    
                armazenar_valor_computador.innerHTML = `O valor que o computador escolheu foi: ${valorComputador}<br>A soma é: ${valor+valorComputador}, resultado PAR!`;
                
                saida_pontuacao_jogador[0].innerHTML = `<p>${saida_pontuacao_jogador[1]++}</p>`;
                if(pontuacaoJogador==comecar()){
                    armazenar_valor_computador.innerHTML = `O vencedor é o <b>jogador</b>, ${pontuacaoJogador} à ${pontuacaoComputador} para o jogador!`;
    
                    setTimeout(() => {location.reload()}, 2000);
    
                    botao_aposta.style.display = 'none';
                }
            } else {
                pontuacaoComputador++;
    
                armazenar_valor_computador.innerHTML = `O valor que o computador escolheu foi: ${valorComputador}<br>A soma é: ${valor+valorComputador}, resultado ÍMPAR!`;
    
                saida_pontuacao_computador[0].innerHTML = `<p>${saida_pontuacao_computador[1]++}</p>`;
    
                if(pontuacaoComputador==comecar()){
                    armazenar_valor_computador.innerHTML = `O vencedor é o <b>computador</b>, ${pontuacaoComputador} à ${pontuacaoJogador} para o computador!`;
    
                    setTimeout(() => {location.reload()}, 2000);
                    
                    botao_aposta.style.display = 'none';
                }
            }
        } else {
            alert("Só insira valor entre 1 e 10");
        }
    } else if(impar.checked){
        if(valor>=1 && valor<=10){
            let armazenar_valor_computador = document.querySelector('.valor-computador');
    
            armazenar_valor_computador.innerHTML = "esperando o computador...";
    
            await sleep(2000)
    
            let valorComputador = Math.floor(Math.random()*11);
    
            if((valor+valorComputador)%2==1){
                pontuacaoJogador++;
    
                armazenar_valor_computador.innerHTML = `O valor que o computador escolheu foi: ${valorComputador}<br>A soma é: ${valor+valorComputador}, resultado ÍMPAR!`;
                
                saida_pontuacao_jogador[0].innerHTML = `<p>${saida_pontuacao_jogador[1]++}</p>`;
                if(pontuacaoJogador==comecar()){
                    armazenar_valor_computador.innerHTML = `O vencedor é o <b>jogador</b>, ${pontuacaoJogador} à ${pontuacaoComputador} para o jogador!`;
    
                    setTimeout(() => {location.reload()}, 2000);
    
                    botao_aposta.style.display = 'none';
                }
            } else {
                pontuacaoComputador++;
    
                armazenar_valor_computador.innerHTML = `O valor que o computador escolheu foi: ${valorComputador}<br>A soma é: ${valor+valorComputador}, resultado PAR!`;
    
                saida_pontuacao_computador[0].innerHTML = `<p>${saida_pontuacao_computador[1]++}</p>`;
    
                if(pontuacaoComputador==comecar()){
                    armazenar_valor_computador.innerHTML = `O vencedor é o <b>computador</b>, ${pontuacaoComputador} à ${pontuacaoJogador} para o computador!`;
    
                    setTimeout(() => {location.reload()}, 2000);
                    
                    botao_aposta.style.display = 'none';
                }
            }
        } else {
            alert("Só insira valor entre 1 e 10");
        }
    }
}