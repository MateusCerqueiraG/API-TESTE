const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/agendamentos.json');

let agendamentos = [];
let id = 1;

if (fs.existsSync(filePath)) {
  const data = fs.readFileSync(filePath);
  agendamentos = JSON.parse(data);
  if (agendamentos.length > 0) {
    id = agendamentos[agendamentos.length - 1].id + 1;
  }
}

function salvarEmArquivo() {
  fs.writeFileSync(filePath, JSON.stringify(agendamentos, null, 2));
}

exports.listarAgendamentos = (req, res) => {
  res.json(agendamentos);
};

exports.criarAgendamento = (req, res) => {
  const novo = { id: id++, ...req.body };
  agendamentos.push(novo);
  salvarEmArquivo();
  res.status(201).json(novo);
};

exports.atualizarAgendamento = (req, res) => {
  const { id } = req.params;
  const index = agendamentos.findIndex(a => a.id == id);
  if (index !== -1) {
    agendamentos[index] = { id: Number(id), ...req.body };
    salvarEmArquivo();
    res.json(agendamentos[index]);
  } else {
    res.status(404).json({ erro: "Agendamento não encontrado" });
  }
};

exports.deletarAgendamento = (req, res) => {
  const { id } = req.params;
  agendamentos = agendamentos.filter(a => a.id != id);
  salvarEmArquivo();
  res.status(204).send();
};
