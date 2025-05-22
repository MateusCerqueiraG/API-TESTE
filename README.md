📦 API de Agendamentos

Esta é uma API REST criada com Node.js e Express para gerenciar agendamentos de uma aplicação web.

🚀 Como rodar o projeto localmente
1. Clone o repositório
```
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```
2. Instale as dependências:
```
npm install
```
3. Inicie o servidor
```
node index.js
```
O servidor será iniciado em:
📍 http://localhost:3000

📌 Rotas da API

✅ GET /api/agendamentos
Retorna todos os agendamentos cadastrados.

✅ POST /api/agendamentos
Cria um novo agendamento.

Exemplo de JSON no corpo da requisição:
```
{
  "nome": "João da Silva",
  "telefone": "11999999999",
  "servico": "Troca de óleo"
}
```
🔄 PUT /api/agendamentos/:id
Atualiza um agendamento existente.

Exemplo de corpo da requisição (JSON):
```
{
  "nome": "João da Silva Atualizado",
  "telefone": "11988888888",
  "servico": "Alinhamento"
}
```

❌ DELETE /api/agendamentos/:id
Remove um agendamento com o ID especificado.

🛠 Tecnologias

Node.js

Express

Postman (para testes)

JSON (como banco de dados local)
