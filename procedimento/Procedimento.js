const Sequelize = require("sequelize");
const connection = require("../database/database");

const Agendamento = connection.define('procedimento', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    }, preco: {
        type: Sequelize.DOUBLE,
        allowNull: false        
    }, descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Agendamento.sync({force: false}); //Criar a tabela sempre que axecutar o progrma (false: só cria se não existir)
module.exports = Agendamento;