// Lida com a submissão do formulário de inscrição
document.getElementById('subscribeForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const messageElement = document.getElementById('message');
    
    // Exibe mensagem de confirmação
    messageElement.textContent = `Obrigado, ${name}! Você se inscreveu com o e-mail ${email}.`;
    
    // Limpa os campos do formulário
    document.getElementById('subscribeForm').reset();
  });
  