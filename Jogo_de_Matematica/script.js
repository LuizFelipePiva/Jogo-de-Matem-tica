const salvaNome = document.getElementById("nome");

const manipulaNome = document.querySelector(".labelNome");
const manipulaDif = document.querySelector(".labelDificuldade");
const manipulaConta = document.querySelector(".escolhaConta");
const manipulaFinal = document.querySelector(".resolveConta");
const manipulaNovoCalculo = document.querySelector(".gerarCalculo");
const manipulaBotaoEnviar = document.querySelector(".btnEnviar");
const apareceBotaoParar = document.querySelector(".btnParar");
const manipulaModalResult = document.querySelector(".modalResult");
const apareceAcerto = document.querySelector(".acerto");
const apareceErro = document.querySelector(".erro");


const printResult = document.getElementById("printResult");
const modalResult = document.getElementById("modalResultado");
const resposta = document.getElementById("resposta");
const dif = document.getElementById("dif");


const operacao = document.getElementById("operacao");


var dificuldade;
var opcao;
var op;
var resultado;
var acerto = 0;
var erro = 0;
var contador = 0;


function enviarNome(){

    var nome = salvaNome.value;

    manipulaNome.classList.add("someLabel");
    manipulaDif.classList.add("apareceLabel");
    dif.innerHTML = (`Bem vindo(a), ${nome} <br><br>Escolha uma dificuldade:`);
}


function voltarNome(){

    manipulaNome.classList.remove("someLabel");
    manipulaDif.classList.remove("apareceLabel");
    salvaNome.value = ""
}


function difFacil(){

    dificuldade = 1;
    manipulaDif.classList.remove("apareceLabel");
    manipulaConta.classList.add("apareceConta");

}

function difMedio(){

    dificuldade = 2;
    manipulaDif.classList.remove("apareceLabel");
    manipulaConta.classList.add("apareceConta");

}

function difDificil(){
    
    dificuldade = 3;
    manipulaDif.classList.remove("apareceLabel");
    manipulaConta.classList.add("apareceConta");
}

function voltarDif(){
    manipulaDif.classList.add("apareceLabel");
    manipulaConta.classList.remove("apareceConta");
    dificuldade = 0;

}

function soma(){

    opcao = 1;
    op = "+";

    manipulaConta.classList.remove("apareceConta");
    manipulaFinal.classList.add("apareceFinal");

    document.getElementById("lblopcao").value = opcao;

    
    geracaoConta(dificuldade,opcao);
}

function sub(){

    opcao = 2;
    op = "-";

    manipulaConta.classList.remove("apareceConta");
    manipulaFinal.classList.add("apareceFinal");

    document.getElementById("lblopcao").value = opcao;


    geracaoConta(dificuldade, opcao);

}

function mult(){

    opcao = 3;
    op = "X";

    manipulaConta.classList.remove("apareceConta");
    manipulaFinal.classList.add("apareceFinal");

    document.getElementById("lblopcao").value = opcao;

    geracaoConta(dificuldade, opcao);

}

function divisao(){

    opcao = 4;
    op = "÷";

    manipulaConta.classList.remove("apareceConta");
    manipulaFinal.classList.add("apareceFinal");

    document.getElementById("lblopcao").value = opcao;


    geracaoConta(dificuldade, opcao);

}



function geracaoConta(dificuldade, opcao){

    var num1,num2;

    // gerar numeros aleatorios para a soma
    if(opcao == 1){
        switch(dificuldade){

            case 1: // dificuldade facil
                num1 = Math.floor(Math.random() * 9);
                num2 = Math.floor(Math.random() * 9);
                
            break;

            case 2: // dificuldade medio
                num1 = Math.floor(Math.random() * 89) + 10;
                num2 = Math.floor(Math.random() * 89) + 10;
            break;

            case 3: // dificuldade dificil
                num1 = Math.floor(Math.random() * 899) + 100;
                num2 = Math.floor(Math.random() * 899) + 100;
            break;
        }
        
        enviarResposta(opcao, num1, num2, contador);
    }


    // gerar numeros aleatorios para a subtracao
    else if(opcao == 2){
        switch(dificuldade){

            case 1: // dificuldade facil
                
                do{

                num1 = Math.floor(Math.random() * 9);
                num2 = Math.floor(Math.random() * 9);

                }while(num2 > num1);
            break;

            case 2: // dificuldade medio

                do{

                num1 = Math.floor(Math.random() * 89) + 10;
                num2 = Math.floor(Math.random() * 89) + 10;

                }while(num2 > num1);
            break;

            case 3: // dificuldade dificil
                
                do{

                num1 = Math.floor(Math.random() * 899) + 100;
                num2 = Math.floor(Math.random() * 899) + 100;

                }while(num2 > num1);
            break;    
        }
        enviarResposta(opcao, num1, num2, contador);
    }

    // gerar numeros aleatorios para a multiplicacao
    else if(opcao == 3){
        switch(dificuldade){

            case 1: // dificuldade facil

                num1 = Math.floor(Math.random() * 9);
                num2 = Math.floor(Math.random() * 9);
            break;

            case 2: // dificuldade medio

                num1 = Math.floor(Math.random() * 49) + 10;
                num2 = Math.floor(Math.random() * 49) + 10;
            break;

            case 3: // dificuldade dificil

                num1 = Math.floor(Math.random() * 99) + 50;
                num2 = Math.floor(Math.random() * 99) + 50;
            break;
        }
        enviarResposta(opcao, num1, num2, contador);
    }

    // gerar numeros aleatorios para a divisao
    else if(opcao == 4){
        switch(dificuldade){

            case 1: // dificuldade facil

                do{

                    num1 = Math.floor(Math.random() * 9);
                    num2 = Math.floor(Math.random() * 9);
    
                }while(num2 > num1 || num1 % num2 != 0 || num2 == 0);
            break;

            case 2: // dificuldade medio

                do{

                    num1 = Math.floor(Math.random() * 50) + 10;
                    num2 = Math.floor(Math.random() * 50);
    
                }while(num2 > num1 || num1 % num2 != 0 || num2 == 0 || num1 == num2);
            break;

            case 3: // dificuldade dificil

                do{

                    num1 = Math.floor(Math.random() * 100) + 51;
                    num2 = Math.floor(Math.random() * 100);
    
                }while(num2 > num1 || num1 % num2 != 0 || num2 == 0 || num1 == num2);
            break;
        }
        enviarResposta(opcao, num1, num2, contador);
        
    }

    document.getElementById("lblnum1").value = num1;
    document.getElementById("lblnum2").value = num2;

}



function enviarResposta(opcao, num1, num2, contador){


    var res;
        
    if(contador != 0){

            
        switch(opcao){
                
            case 1:
                res = num1 + num2;
                break;
            case 2:
                res = num1 - num2;
                break;

            case 3:
                res = num1 * num2;
                break;
                
            case 4:
                res = num1 / num2;
                break;        
        }

            

        if(resposta.value == res){
            acerto++;
            apareceAcerto.classList.add("aparecerErroOuAcerto");
            setTimeout(() => {apareceAcerto.classList.remove("aparecerErroOuAcerto") ; }, 1700);
        }
        

        else if(resposta.value != res){
            erro++;
            apareceErro.classList.add("aparecerErroOuAcerto");
            setTimeout(() => {apareceErro.classList.remove("aparecerErroOuAcerto") ; }, 1700);
            
        }

        manipulaNovoCalculo.classList.add("apareceBotaoNovoCalculo");
        manipulaBotaoEnviar.classList.add("desativa");
            
        resposta.disabled = true;
        document.getElementById("botaoEnviar").disabled = true;
        apareceBotaoParar.classList.add("ativarBotao");

        document.getElementById("lblacertos").value = acerto;
        document.getElementById("lblerros").value = erro;

    }
    

    operacao.innerHTML = (`${num1} ${op} ${num2}`);
    contador++;

    resposta.value = "";


}


function menuConta(opcao){

    manipulaBotaoEnviar.classList.remove("desativa");
    manipulaNovoCalculo.classList.remove("apareceBotaoNovoCalculo");
    resposta.disabled = false;
    document.getElementById("botaoEnviar").disabled = false;
    apareceBotaoParar.classList.remove("ativarBotao");

    if(opcao == 1){
        soma();
    }

    else if(opcao == 2){
        sub();
    }
    
    else if(opcao == 3){
        mult();
    }
    
    else if(opcao == 4){
        divisao();
    }

}

function finalizar(acertos, erros){

    var tentativas = acertos + erros;
    resposta.disabled = false;
    document.getElementById("botaoEnviar").disabled = false;
    apareceBotaoParar.classList.remove("ativarBotao");

    manipulaBotaoEnviar.classList.remove("desativa");
    manipulaNovoCalculo.classList.remove("apareceBotaoNovoCalculo");
    manipulaModalResult.classList.add("apareceModalResult");
    printResult.innerHTML = (`${acertos} acerto(s), ${erros} erro(s) em ${tentativas} tentativa(s)!`);

}


function voltarEscolhaConta(){

    acerto = 0;
    erro = 0;
    document.getElementById("lblacertos").value = 0;
    document.getElementById("lblerros").value = 0;

    manipulaModalResult.classList.remove("apareceModalResult");
    manipulaFinal.classList.remove("apareceFinal");
    manipulaConta.classList.add("apareceConta");
}