const Sequelize = require("sequelize");
const connection = require("../database/database");

const Empresa = connection.define('empresa', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    }, telefone: {
        type: Sequelize.STRING,
        allowNull: false,
        limit: 10
    }, email: {
        type: Sequelize.STRING,
        allowNull: false
    }, endereco: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Empresa.sync({force: false}); //Criar a tabela sempre que axecutar o progrma (false: só cria se não existir)
module.exports = Empresa;