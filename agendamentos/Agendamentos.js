const Sequelize = require("sequelize");
const connection = require("../database/database");
const procedimento = require("../procedimento/Procedimento")

const Agendamento = connection.define('agendamento', {
    nomeCliente: {
        type: Sequelize.STRING,
        allowNull: false
    }, telefoneCliente: {
        type: Sequelize.STRING,
        allowNull: false,
        limit: 10
    }, dataHorario: {
        type: Sequelize.STRING,
        allowNull: false
    }, endereco: {
        type: Sequelize.STRING,
        allowNull: false
    }
});
procedimento.hasMany(Agendamento);
Agendamento.belongsTo(procedimento);

Agendamento.sync({force: false}); //Criar a tabela sempre que axecutar o progrma (false: só cria se não existir)
module.exports = Agendamento;