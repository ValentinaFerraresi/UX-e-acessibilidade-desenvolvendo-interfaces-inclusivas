<script>
    const btnAuxilio = document.querySelector('.btn-auxilio');

    btnAuxilio.addEventListener('click', function() {
      // Mensagem visível na tela
      alert('Pedido de auxílio solicitado! Aguarde apoio no local.');
      
      // Feedback auditivo para leitores de tela e acessibilidade
      const aviso = document.createElement('div');
      aviso.setAttribute('role', 'alert');
      aviso.textContent = 'Pedido de auxílio enviado com sucesso.';
      document.body.appendChild(aviso);
    });


  </script>

  <script>
  // Seleção dos elementos do menu
  const btnAumentar = document.getElementById('btn-aumentar-fonte');
  const btnDiminuir = document.getElementById('btn-diminuir-fonte');
  const btnLerTexto = document.getElementById('btn-ler-texto');

  let tamanhoFonteAtual = 100; // Porcentagem inicial do tamanho da fonte

  // Função para alterar o tamanho do texto no corpo da página
  function alterarTamanhoFonte(delta) {
    tamanhoFonteAtual += delta;
    // Limita o tamanho entre 80% e 150% para não quebrar o layout
    if (tamanhoFonteAtual < 80) tamanhoFonteAtual = 80;
    if (tamanhoFonteAtual > 150) tamanhoFonteAtual = 150;
    
    document.body.style.fontSize = tamanhoFonteAtual + '%';
  }

  btnAumentar.addEventListener('click', () => alterarTamanhoFonte(10));
  btnDiminuir.addEventListener('click', () => alterarTamanhoFonte(-10));

  // Função para leitura em voz alta (utiliza a API SpeechSynthesis do navegador)
  btnLerTexto.addEventListener('click', () => {
    // Cancela leituras anteriores caso o botão seja clicado novamente
    window.speechSynthesis.cancel();

    // Captura todo o texto principal da página
    const textoParaLer = document.querySelector('main').innerText;

    const mensagem = new SpeechSynthesisUtterance(textoParaLer);
    mensagem.lang = 'pt-BR';
    mensagem.rate = 1.0; // Velocidade da voz

    window.speechSynthesis.speak(mensagem);
  });
</script>