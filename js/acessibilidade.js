// Botão de alto contraste
// Liga e desliga a classe "alto-contraste" no body e guarda a escolha no navegador.

const botaoContraste = document.getElementById('botao-contraste');

function aplicarContraste(ligado) {
    document.body.classList.toggle('alto-contraste', ligado);
    // aria-pressed avisa o leitor de tela se o botão está ligado ou desligado
    botaoContraste.setAttribute('aria-pressed', ligado ? 'true' : 'false');
}

// Quando a página abre, usa a escolha salva
aplicarContraste(localStorage.getItem('altoContraste') === 'sim');

botaoContraste.addEventListener('click', function () {
    const ligado = !document.body.classList.contains('alto-contraste');
    aplicarContraste(ligado);
    localStorage.setItem('altoContraste', ligado ? 'sim' : 'nao');
});
