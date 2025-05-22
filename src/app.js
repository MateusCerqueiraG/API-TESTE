const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const agendamentoRoutes = require('./routes/agendamentoRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/agendamentos', agendamentoRoutes);

app.use(express.static(path.join(__dirname, '../public')));

module.exports = app;
