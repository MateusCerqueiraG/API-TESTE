const express = require('express');
const router = express.Router();
const {
  listarAgendamentos,
  criarAgendamento,
  atualizarAgendamento,
  deletarAgendamento
} = require('../controllers/agendamentoController');

router.get('/', listarAgendamentos);
router.post('/', criarAgendamento);
router.put('/:id', atualizarAgendamento);
router.delete('/:id', deletarAgendamento);

module.exports = router;