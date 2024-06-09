/* OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o proximo 
cartao da lista */

//passo 1 - dar um jeito de pegar o elemento HTML da seta avancar. Vamos declarar as variavel.
const btnAvancar = document.getElementById('btn-avancar');
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");


//passo 1 do objetivo 2 - dar um jeito de pegar o elemento HTML da seta voltar
const btnVoltar = document.getElementById("btn-voltar")



//passo 2 - dar um jeito de identificar o clique do usuário na seta avançar.
btnAvancar.addEventListener("click", function () {
    const ehUltimoCartao = cartaoAtual === cartoes.length - 1
    
    if (cartaoAtual === cartoes.length - 1) {
        return;
    };
    //console.log(cartoes.length)length significa o tamanho da minha araway;

    //passo 3 - fazer aparecer o próximo cartão da lista, colocando a classe-selecionado nele.
    cartaoAtual++;/* ++  quer dizer acrescentar mais um */
    //console.log(cartoes[cartaoAtual]);
    mostrarCartao();


    //passo 4 - buscar o cartão que esta selecionado e esconder
    escondercartaoSelecionado();
});





/*OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão anterior da lista*/


//passo 2 - dar um jeito de identificar o clique do usuário na seta voltar

btnVoltar.addEventListener("click", function () {
    const ehPrimeiroCartao = cartaoAtual === 0;
    if (cartaoAtual === 0) {
        return;
    }
    //passo 4 - buscar o cartão que esta selecionado e esconder
    escondercartaoSelecionado();


    //passo 3 - fazer aparecer o cartão anterior da lista
    cartaoAtual--;  /* --  quer dizer decrementar  */
    mostrarCartao();

});






function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function escondercartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove('selecionado');
}













