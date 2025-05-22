const form = document.getElementById('agendamentoForm');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const agendamento = {
    nome: document.getElementById('nome').value,
    telefone: document.getElementById('telefone').value,
    servico: document.getElementById('servico').value
  };

  const resposta = await fetch('http://localhost:3000/api/agendamentos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(agendamento)
  });

  if (resposta.ok) {
    mensagem.textContent = 'Agendamento enviado com sucesso!';
    form.reset();
  } else {
    mensagem.textContent = 'Erro ao agendar.';
    mensagem.style.color = 'red';
  }
});
